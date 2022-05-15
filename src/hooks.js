import { useCallback, useRef, useEffect, useState } from "preact/hooks";
import { getLeaderboardAsync, getPlayer } from "./data";
import { events } from "./events";
import { throttle } from "./utils";

export function usePlayer() {
  const [player, setPlayer] = useState(getPlayer());
  useEffect(() => {
    function onPlayerUpdated() {
      const player = getPlayer();
      setPlayer(player);
    }
    window.addEventListener(events.playerUpdated, onPlayerUpdated);
    return () => {
      window.removeEventListener(events.playerUpdated, onPlayerUpdated);
    };
  }, []);
  return player;
}

export function usePlayerList(showAll) {
  const [players, setPlayers] = useState([]);
  const [myRank, setMyRank] = useState();

  useEffect(() => {
    async function loadPlayersAsync() {
      const players = await getLeaderboardAsync(showAll);

      setPlayers(players);
      setMyRank((players || []).find((x) => x.me));
    }
    loadPlayersAsync();
    window.addEventListener(events.playerUpdated, loadPlayersAsync);
    window.addEventListener(events.playersLoaded, loadPlayersAsync);
    return () => {
      window.removeEventListener(events.playerUpdated, loadPlayersAsync);
      window.removeEventListener(events.playersLoaded, loadPlayersAsync);
    };
  }, [setMyRank, showAll]);

  return { players, myRank };
}
const noop = () => undefined;

const [onWindowEvent, offWindowEvent] = window.addEventListener
  ? [
      window.addEventListener.bind(window),
      window.removeEventListener.bind(window),
    ]
  : [noop, noop];

const isVisible = () => {
  const visibilityState = document.visibilityState;
  return visibilityState == null || visibilityState !== "hidden";
};

export const useFocus = (callback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const wrappedCallback = useCallback(throttle(callback, 5000), [callback]);
  const onVisibleChange = () => {
    if (isVisible()) {
      wrappedCallback();
    }
  };
  document.addEventListener("visibilitychange", onVisibleChange);
  onWindowEvent("focus", wrappedCallback);
  return () => {
    document.removeEventListener("visibilitychange", onVisibleChange);
    offWindowEvent("focus", wrappedCallback);
  };
};

export function usePreventConcurrentInvocation(fn) {
  const clickingRef = useRef(false);
  return async (...args) => {
    if(clickingRef.current) return;
    try {
      clickingRef.current = true;
      await fn(...args);      
    } finally {
      clickingRef.current = false;
    }
  };
}
