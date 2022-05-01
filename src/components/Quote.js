import { css } from "goober";
import { useState, useRef, useEffect } from "preact/hooks";
import { sleep } from "../utils";
import { h } from "preact";

const messageTimeMs = 4000;

export function Quote({ quotes }) {
  const [displayQuote, setDisplayQuote] = useState();
  const eleRef = useRef(null);
  const currentQuoteRef = useRef(null);
  const styles = css`
    transition: all 300ms;
    overflow: hidden;
  `;

  useEffect(() => {
    let timeoutId;
    let exit;
    let index = 0;
    const nextQuote = async () => {
      if (index >= quotes.length) {
        index = 0;
      }    
      const newQuote = quotes[index] || "";
      index++;

      if(currentQuoteRef.current !== newQuote) {        
        await changeQuote(newQuote);
      }
      if(exit)return;
      timeoutId = setTimeout(nextQuote, messageTimeMs);
      
    };
    async function changeQuote(quote) {
      
      eleRef.current.style.transform = "scaleX(0)";    
      await sleep(350);
      setDisplayQuote(quote);
      currentQuoteRef.current = quote;
      eleRef.current.style.transform = "scaleX(1)";
    }

    nextQuote();
    return () => {
      clearTimeout(timeoutId);
      exit = true;
    }
  }, [quotes]);

  return (
    <span ref={eleRef} class={styles}>
      {displayQuote || ""}
    </span>
  );
}
