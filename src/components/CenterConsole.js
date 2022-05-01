import { h } from "preact";
import { css } from "goober";
import { colors } from '../style';
import { StartButton } from './StartButton';
import { Counter } from './Counter';

export function CenterConsole({ size, onClick, disabled, score }) {
    const mySize = size * 0.5;
    const styles = css`
      z-index: 100;
      overflow: hidden;
      position: absolute;
      background-color: ${colors.black};
      border-radius: 999px;
      border: ${size * 0.04}px solid ${colors.black};
      color: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: ${mySize}px;
      width: ${mySize}px;
      display: flex;
      flex-direction: column;
  
      .top-section {
        height: 45%;
        background-color: #101010;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-size: ${size * 0.045}px;
        padding-bottom: ${size * 0.05}px;
      }
      .bottom-section {
        height: 55%;
        padding-top: ${size * 0.02}px;
        background-color: #101010;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding-bottom: ${size * 0.01}px;
        gap: 4px;
        align-items: center;
      }
    `;
    return (
      <div class={styles}>
        <div class="top-section">SIMON SAYS</div>
        <div class="bottom-section">
          <div>
            <Counter count={score} size={size} />
          </div>
          <div>
            <StartButton size={size} disabled={disabled} onClick={onClick} />
          </div>
        </div>
      </div>
    );
  }