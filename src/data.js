import { nextId } from "./utils";
import * as forage from "localforage";
import { dispatchEvent, events } from "./events";
import { workerActions } from './workerClient';

const DEFAULT_TEAM_ID = "1nn2iuopnpd20x72be08zt";
const apiBaseUrl = "https://simon-says-api.glitch.me";

const url = new URL(window.location.href);
export const teamId = url.searchParams.get("team") || DEFAULT_TEAM_ID;
const userIdKey = `teams/${teamId}/userId`;

const teamPlayersKey = `teams/${teamId}/players`;

const me = {
  getPlayerKey() {
    return `teams/${teamId}/players/${this.getPlayerId()}`;
  },
  getPlayerId() {
    return getItem(userIdKey);
  },
  setPlayerId(playerId) {
    setItem(userIdKey, playerId);
  },
  setPlayer({ name, highScore }) {
    const key = this.getPlayerKey();
    const player = { id: this.getPlayerId(), name, highScore };
    setItem(key, player);
  },
  getPlayer() {
    const key = this.getPlayerKey();
    let player = getItem(key);
    if (!player) {
      player = {
        id: this.getPlayerId(),
        name: `user${Date.now()}`,
        highScore: 0,
      };
      setItem(key, player);
    }

    return player;
  },

  setHighScore(highScore) {
    const player = this.getPlayer();
    player.highScore = highScore;
    this.updatePlayer(player);
  },
  setName(name) {
    const player = this.getPlayer();
    player.name = name;
    this.updatePlayer(player);
  },
  updatePlayer(player) {
    setItem(this.getPlayerKey(), player);
  },
};

if (!me.getPlayerId()) {
  me.setPlayerId(nextId());
}

function playersSorter(a, b) {
  if (a.highScore < b.hightScore) return -1;
  if (a.highScore > b.highScore) return 1;
  return 0;
}
const leaderboard = {
  async sortTeamPlayersAsync() {
    const players = await this.getTeamPlayersAsync();
    await this.setTeamPlayersAsync(players);
  },
  async setTeamPlayersAsync(players) {
    players = players.sort(playersSorter);

    players.forEach((x, index) => (x.rank = index + 1));
    await forage.setItem(teamPlayersKey, players);
  },
  async setPlayerNameAsync(name) {
    const players = await this.getTeamPlayersAsync();
    const currentPlayer = players.find((x) => x.me);
    if (currentPlayer) {
      currentPlayer.name = name;
    }

    await this.setTeamPlayersAsync(players);
  },
  async getTeamPlayersAsync() {
    return (await forage.getItem(teamPlayersKey)) || [];
  },
};

const api = {
  async createPlayerAsync({ id, teamId, name, highScore }) {
    const key = await workerActions.generateKeyAsync(id);
    await fetchJsonAsync("POST", `${apiBaseUrl}/teams/${teamId}/players`, {
      id,
      teamId,
      name,
      highScore,
      key
    });
  },
  async getPlayerAsync(id = me.getPlayerId()) {
    return await fetchJsonAsync(
      "GET",
      `${apiBaseUrl}/teams/${teamId}/players/${id}`
    );
  },
  async getAllPlayersAsync() {
    return await fetchJsonAsync("GET", `${apiBaseUrl}/teams/${teamId}/players`);
  },
  async setPlayerNameAsync(name) {
    await fetchJsonAsync(
      "POST",
      `${apiBaseUrl}/teams/${teamId}/players/${me.getPlayerId()}/set-name`,
      name
    );
  },
  async setPlayerHighScoreAsync(score) {
    await fetchJsonAsync(
      "POST",
      `${apiBaseUrl}/teams/${teamId}/players/${me.getPlayerId()}/set-high-score`,
      score
    );
  },
};

function fetchJsonAsync(method, url, body) {
  const bodyStr = body ? JSON.stringify(body) : undefined;
  return fetch(url, {
    method,
    body: bodyStr,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${me.getPlayerId()}`,
    },
  }).then((x) => {
    if (x.ok === false) throw x;
    return x.json();
  });
}

function getItem(key) {
  const str = window.localStorage.getItem(key);
  if (!str) {
    return null;
  }
  return JSON.parse(str);
}

function setItem(key, item) {
  window.localStorage.setItem(key, JSON.stringify(item));
}


// START UP
// --------------------------------------------------------------------------
const initPromise = (async function main() {
  try {
    await loadMyPlayerAsync();
  } catch (err) {
    if (err.status === 404) {
      const player = me.getPlayer();
      console.log("player does not exist");
      await api.createPlayerAsync({
        id: me.getPlayerId(),
        teamId,
        name: player.name,
        highScore: player.highScore,
      });

      dispatchEvent(events.newUserCreated);
    }
  }
  await loadLeaderboardAsync();
})().catch(err => {
  console.error('Main startup failed', err);
});
initPromise.finally(() => dispatchEvent(events.loaded));

export function onLoad(callback) {
  initPromise.finally(callback)
}

// EXPORTS
// -----------------------------------------------------

export function hasDefaultPlayerName(player) {
  if(!player) return false;
  return /^user[0-9]{12}/.test(player.name);
}

export async function loadMyPlayerAsync() {
  const remotePlayer = await api.getPlayerAsync();
  const localPlayer = me.getPlayer();

  if (localPlayer.highScore > (remotePlayer.highScore || 0)) {
    await api.setPlayerHighScoreAsync(localPlayer.highScore);
  } else if (localPlayer.highScore < remotePlayer.highScore) {
    me.setHighScore(remotePlayer.highScore);
  }
  if (localPlayer.name !== remotePlayer.name) {
    me.setName(remotePlayer.name);
  }
  dispatchEvent(events.playerUpdated);
}

export async function loadLeaderboardAsync() {
  const players = await api.getAllPlayersAsync();
  await leaderboard.setTeamPlayersAsync(players);
  dispatchEvent(events.playersLoaded);
}

export function getPlayer() {
  return me.getPlayer();
}

export async function refreshAsync() {
  await loadMyPlayerAsync();
  await loadLeaderboardAsync();
}

export async function changePlayerIdAsync(playerId) {
  const remotePlayer = await api.getPlayerAsync(playerId);
  me.setPlayerId(playerId);
  me.setPlayer(remotePlayer);
  dispatchEvent(events.playerUpdated);
}

export const setPlayerHighScoreAsync = async (score) => {
  const player = me.getPlayer();

  if (player.highScore !== score) {
    me.setHighScore(score);
    await leaderboard.sortTeamPlayersAsync();
    dispatchEvent(events.playerUpdated);
    await api.setPlayerHighScoreAsync(score);
  }
};

export const updatePlayerNameAsync = async (name) => {
  await api.setPlayerNameAsync(name);
  me.setName(name);
  await leaderboard.setPlayerNameAsync(name);
  dispatchEvent(events.playerUpdated);
};

/**
 * Retrieves top 5 players above and below the current player.
 *
 * We do this to exclude rubbish players at the bottom, and cheaters at the top
 * @returns leaderboard players
 */
export async function getLeaderboardAsync(showAll) {
  const count = 5;
  let players = await leaderboard.getTeamPlayersAsync();

  const myIndex = players.findIndex((x) => x.me);

  if (myIndex >= 0 && !showAll) {
    players[myIndex].highScore = me.getPlayer().highScore;
    let low = myIndex - count;
    let high = myIndex + count;
    low = low < 0 ? 0 : low;
    high = high > players.length - 1 ? players.length - 1 : high;
    return players.slice(low, high + 1);
  }
  return players || [];
}
