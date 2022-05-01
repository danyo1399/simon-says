import { h } from "preact";
import { css } from "goober";

export function StartButton({ onClick, disabled, size }) {
    const styles = css`
      // width: ${size * 0.08}px;
      ${disabled ? "opacity: 0.1; pointer-events: none;" : ""}
      width:fit-content;
      display: grid;
      place-content: center;
      text-transform: uppercase;
      font-size: ${size * 0.03}px;
      padding: ${size * 0.02}px;
      height: ${size * 0.08}px;
      border-radius: 999px;
      border: ${size * 0.015}px solid black;
      background-color: red;
    `;
    return (
      <div onClick={onClick} class={styles} role="button">
        Start
      </div>
    );
  }