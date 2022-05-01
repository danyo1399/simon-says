import { h } from "preact";
import { css, keyframes, setup } from "goober";
import { getNextMove, sleep, timer } from "../utils";
import { useRef, useState } from "preact/hooks";
import { colors, setupStyles as setupCssImports } from "../style";
import { CenterConsole } from "./CenterConsole";
import { GameButton } from "./GameButton";
import { Quote } from "./Quote";
import { initAudio, playAudioAsync, playGameOverSound } from "../audio";
import { usePreventConcurrentInvocation } from "../hooks";
setup(h);

setupCssImports(
  '@import url("https://fonts.googleapis.com/css2?family=Sarpanch:wght@800&display=swap");'
);

export default function SimonSays({
  size,
  quotes,
  updateGameState,
  onGameOver,
} = {}) {
  size = size || 400;
  quotes = quotes || [];
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  `;
  const styles = css`
    ${reset}
    --size: ${size}px;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: ${colors.black};
    border-radius: 999px;
    font-family: Sarpanch;

    *,
    *:before,
    *:after {
      user-select: none;
    }

    .button-container {
      display: grid;
      place-content: center;
    }
    .outer-ring {
      width: 100%;
      height: 100%;
      position: absolute;
      border: ${size * 0.04}px solid ${colors.black};
      border-radius: 999px;
      z-index: 100;
      pointer-events: none;
    }

    .vertical-border {
      position: absolute;
      height: 95%;
      z-index: 50;
      top: 50%;
      left: 50%;
      width: ${size * 0.07}px;
      transform: translate(-50%, -50%);
      background-color: ${colors.black};
    }

    .horizontal-border {
      position: absolute;
      display: grid;
      place-content: center;
      width: 95%;
      z-index: 150;
      top: 50%;
      left: 50%;
      height: ${size * 0.07}px;
      transform: translate(-50%, -50%);
      color: white;
      font-size: ${size * 0.03}px;
      text-align: center;
      font-style: italic;
      background-color: ${colors.black};
    }
    .rotate {
      animation-name: ${rotate};
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    .rotating-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  `;

  const selectionsRef = useRef([]);
  const enteredRef = useRef([]);
  const gameStartedRef = useRef(false);
  const [gameStarted, _setGameStarted] = useState(false);
  const disableButtonsRef = useRef(true);
  const timerRef = useRef();
  const [active, setActive] = useState();

  // need game started ref to avoid timing issues to do with rerenders
  // need state value to pass to other components
  function setGameStarted(isStarted) {
    _setGameStarted(isStarted);
    gameStartedRef.current = isStarted;
    updateGameState && updateGameState(isStarted);
  }

  async function startGameAsync() {
    if (gameStartedRef.current) return;
    initAudio();
    resetGame();

    setGameStarted(true);
    await sleep(500);
    nextTurn();
  }

  const gameOver = usePreventConcurrentInvocation(async () => {
    if (!gameStartedRef.current) return;
    async function gameOverAnimationAsync() {
      const actions = [1, 2, 4, 3];
      for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) {
          setActive(actions[i]);
          await sleep(80);
        }
      }
      setActive(null);
    }
    setGameStarted(false);
    timerRef.current?.stop();

    disableButtonsRef.current = true;
    playGameOverSound();

    await gameOverAnimationAsync();
    onGameOver && onGameOver(selectionsRef.current.length);
  });

  const nextTurn = async () => {
    selectionsRef.current.push(getNextMove());
    disableButtonsRef.current = true;
    let count = 0;
    for (const sel of selectionsRef.current) {
      count++;
      setActive(sel);
      playAudioAsync(sel);
      await sleep(400);
      setActive(null);
      if (count < selectionsRef.current.length) await sleep(50);
    }
    disableButtonsRef.current = false;
    timerRef.current?.stop();
    timerRef.current = timer(3000, gameOver);
    enteredRef.current = [];
  };

  function optionClick(position) {
    if (enteredRef.current.length === selectionsRef.current.length) return;
    enteredRef.current.push(position);
    processTurnAsync();
  }

  function resetGame() {
    setGameStarted(false);
    disableButtonsRef.current = false;
    selectionsRef.current = [];
    enteredRef.current = [];
  }

  async function processTurnAsync() {
    if (!gameStartedRef.current) return;
    if (selectionsRef.current.length == 0) {
      return;
    }
    const enteredStr = enteredRef.current.join();
    const selectionsStr = selectionsRef.current.join();
    timerRef.current?.reset();
    if (enteredStr && selectionsStr.startsWith(enteredStr) === false) {
      timerRef.current?.stop();
      return gameOver();
    }

    if (enteredRef.current.join() === selectionsRef.current.join()) {
      timerRef.current?.stop();
      disableButtonsRef.current = true;
      setTimeout(() => {
        nextTurn();
      }, 800);
    }
  }

  return (
    <div class={styles}>
      <CenterConsole
        size={size * 0.8}
        disabled={gameStarted}
        score={selectionsRef.current.length}
        onClick={startGameAsync}
      />
      <div class="outer-ring" />
      <div class="rotating-section">
        <div class="vertical-border" />
        <div class="horizontal-border">
          <Quote quotes={quotes} />
        </div>
        <div class="button-container">
          <GameButton
            position={1}
            disabledRef={disableButtonsRef}
            activate={active === 1}
            onClick={optionClick}
            size={size}
          />
        </div>
        <div class="button-container">
          <GameButton
            position={2}
            disabledRef={disableButtonsRef}
            activate={active === 2}
            onClick={optionClick}
            size={size}
          />
        </div>
        <div class="button-container">
          <GameButton
            position={3}
            disabledRef={disableButtonsRef}
            activate={active === 3}
            onClick={optionClick}
            size={size}
          />
        </div>
        <div class="button-container">
          <GameButton
            position={4}
            disabledRef={disableButtonsRef}
            activate={active === 4}
            onClick={optionClick}
            size={size}
          />
        </div>
      </div>
    </div>
  );
}

const reset = `
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;
