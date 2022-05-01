import { css, keyframes } from "goober";
import { useEffect, useState } from "preact/hooks";
import { sleep } from "../utils";

export function TopBar({ player, shake }) {
  const shakeKeyFrames = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-2px, 0px) rotate(1deg); }
    30% { transform: translate(2px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(2px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
    `;
  const styles = css`
    .shake {
        animation: ${shakeKeyFrames} 0.4s;
        /* When the animation is finished, start again */
        animation-iteration-count: infinite;
    }
      box-shadow: 0 0 10px 0px black;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      letter-spacing: 1px;
      color: white;
      height: 3rem;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1000;
      background-color: #323232;
      width: 100%;
      .high-score {
        font-weight: 500;
        font-size: 1.2rem;
        position: absolute;
        right: 1rem;
      }
      .player-name {
        display:flex;
        align-items:center;
        justify-content-center;
        gap:0.6rem;
        font-weight: 500;
        font-size: 1.2rem;
        .icon {
          font-size: 0.8rem;
          position: relative;
          top: -0.4rem;
        }
        cursor: pointer;
        user-select: none;
      }
    `;

  const [_shake, _setShake] = useState(false);
  useEffect(() => {
    let exit = false;
    async function run() {
      while (!exit) {
        await sleep(2000);
        if (exit) return;
        _setShake(true);

        await sleep(700);
        if (exit) return;
        _setShake(false);
      }
    }
    shake && run();
    return () => {
      exit = true;
      _setShake(false);
    };
  }, [shake]);
  return (
    <div class={styles}>
      <button
        type="button"
        class="player-name"
        data-bs-toggle="modal"
        data-bs-target="#change-player-name-modal"
      >
        <div class={_shake ? "shake" : ""}>{player?.name}</div>{" "}
        <i class="bi bi-pencil-square icon" />
      </button>

      <span class="high-score">High Score: {player?.highScore}</span>
    </div>
  );
}
