import { css } from 'goober';
import { useEffect, useState } from 'preact/hooks';

export function LoadingScreen() {
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