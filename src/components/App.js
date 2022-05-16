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
import { LoadingScreen } from './LoadingScreen';

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
      {!loaded  && <LoadingScreen />}
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

