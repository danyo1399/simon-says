import { css } from 'goober';
import { useState, useRef } from 'preact/hooks';
import { h } from "preact";
import { playAudioAsync } from '../audio';

const green = '#00d500'
export function GameButton({
  position,
  activate,
  disabledRef,
  size,
  onClick,
  className,
  ...props
}) {
  const [clicking, setClicking] = useState(0);
  const timeoutRef = useRef();
  const styles = css`
    color: ${green};
    .idle {
      opacity: 50%;
    }
    .clicking {
      opacity: 100%;
    }

    fill: currentColor;
    ${(position === 2 &&
      `
      color: red;
      transform: rotateZ(90deg);
    `) ||
    undefined}

    ${(position === 3 &&
      `
    color: yellow;
    transform: rotateZ(270deg);
  `) ||
    undefined}

  ${(position === 4 &&
      `
  color: blue;
  transform: rotateZ(180deg);
`) ||
    undefined}
  `;
  const innerSize = size * 0.5;
  async function _onClickAsync() {
    if (disabledRef.current) return;
    setClicking(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setClicking(false);
      timeoutRef.current = null;
    }, 400);
    const promise = playAudioAsync(position);

    await promise;
    onClick && onClick(position);
    if (timeoutRef.current == null) {
      setClicking(false);
    }
  }
  return (
    <div class={styles}>
      <svg
        onMouseDown={_onClickAsync}
        class={`${clicking || activate ? "clicking" : "idle"} ${clicking}`}
        width={`${innerSize}px`}
        height={`${innerSize}px`}
        {...props}
        viewBox="0 0 50 50"
      >
        <circle cx="50" cy="50" r="50" />
        {/* <path d=" M2,2 Q8,2 8,8 M8,8 L4,8 Q4,6 2,6 L2,2"></path> */}
      </svg>
    </div>
  );
}