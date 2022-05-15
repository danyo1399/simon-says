import { css } from "goober";
import { useEffect, useState } from "preact/hooks";
import {
  hasDefaultPlayerName,
  onLoad,
  refreshAsync,
  setPlayerHighScoreAsync,
} from "../data";
import { useFocus, usePlayer, usePlayerList } from "../hooks";
import { PlayerList } from "./PlayerList";
import SimonSays from "./SimonSays";
import { UpdatePlayerModal } from "./UpdatePlayerModal";
import { predefinedQuotes } from "../quotes";
import { toNthString } from "../utils";
import { TopBar } from "./TopBar";

export function App() {
  const styles = css`
    display: grid;
    place-items: center;
    .body-content {
      margin-top: 4rem;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  `;

  const [showAll, setShowAll] = useState(false);
  const { players, myRank } = usePlayerList(showAll);

  const [quotes, setQuotes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [size, setSize] = useState(400);
  const [gameStarted, setGameStarted] = useState(false);
  const player = usePlayer();
  onLoad(() => setLoaded(true));
  function calculateSize() {
    const windowHeight = window.innerHeight - 80;
    let length =
      window.innerWidth < windowHeight ? window.innerWidth : windowHeight;
    let defaultWidth = length - 30;
    if (defaultWidth < 200) defaultWidth = 200;
    if (defaultWidth > 800) defaultWidth = 800;
    setSize(defaultWidth);
  }
  useEffect(() => {
    calculateSize();
    window.addEventListener("resize", calculateSize);
    return () => {
      window.removeEventListener("resize", calculateSize);
    };
  }, []);

  useEffect(() => {
    if (!gameStarted) {
      const beforeStartQuotes = ["Click start to play"];
      if (hasDefaultPlayerName(player)) {
        beforeStartQuotes.push(`Choose your own username from the top left`);
      }
      if (myRank) {
        beforeStartQuotes.push(
          `You are ranked ${toNthString(myRank.rank)} in the world`
        );
      }

      setQuotes(beforeStartQuotes);
    } else {
      setQuotes(predefinedQuotes);
    }
  }, [gameStarted, myRank, player]);
  // we reload players on focus because there is no way to refresh on pwa
  useFocus(refreshAsync);

  async function onGameOverAsync(score) {
    if (score > player.highScore) {
      await setPlayerHighScoreAsync(score);
    }
  }

  return (
    <div class={styles}>
      {!loaded  && <Loading />}
      <UpdatePlayerModal />
      <TopBar player={player} shake={hasDefaultPlayerName(player)} />
      <div class="body-content">
        <SimonSays
          size={size}
          quotes={quotes}
          updateGameState={setGameStarted}
          onGameOver={onGameOverAsync}
        />
        <PlayerList
          players={players}
          onShowAllClick={() => setShowAll((x) => !x)}
        />
      </div>
    </div>
  );
}

function Loading() {
  const styles = css`
    position: fixed;
    top: 0;
    display: grid;
    place-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100000;
    background: #d9d9d9;
    .spinner {
      width:5rem;
      height:5rem;
    }
    .content {
      display:grid;
      place-items:center;
      font-size: 1.5rem;
      font-weight:500;
      span {
        margin-top:1rem;
      }
      
    }
  `;

  useEffect(() => {
    document.body.style.position = 'fixed';
    return () => {
      document.body.style.position = 'unset'
    }
  }, [])
  return (
    <div class={styles}>
      <div class="content">
      <div class=" spinner spinner-border" role="status" />
      <span>Loading</span>
      </div>
    </div>
  );
}
