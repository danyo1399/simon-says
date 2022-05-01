import { h } from "preact";
import { css } from "goober";

export function Counter({ count, size }) {
    const styles = css`
      background-color: black;
      width: ${size * 0.2}px;
      font-size: ${size * 0.04}px;
      display: flex;
      letter-spacing: 3px;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
    `;
    return <div class={styles}>{count}</div>;
  }