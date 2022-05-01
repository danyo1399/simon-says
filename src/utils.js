export function sleep(ms) {
  let id;
  const promise =  new Promise((resolve) => {
    id = setTimeout(resolve, ms);
  });
  promise.cancel = () => id && clearTimeout(id)
  return promise;
}

export function nextId() {
  return (
    Number(Math.random().toString().slice(2)).toString(36) +
    Number(Math.random().toString().slice(2)).toString(36)
  );
}

export function toNthString(number) {
  number = Number(number)
  if(!number) return '';

  if(number === 1) return '1st';
  if(number === 2) return '2nd';
  if(number === 3) return '3rd';
  return `${number}th`;
}

export function timer(timeoutMs, callback) {
  let interval;
  function tick() {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback();
    }, timeoutMs);
  }

  function stop() {
    clearInterval(interval);
  }

  function reset(ms) {
    timeoutMs = ms || timeoutMs;
    tick();
  }
  tick();
  return { reset, stop };
}


export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function getNextMove() {
  return getRandomInt(1,5);
}



export function debounce(fn, timeMs) {
  let id = null;
  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, timeMs);
  };
}

export function throttle(fn, timeMs) {
  let throttled = false;
  return (...args) => {
    if (throttled) return;
    throttled = true;
    fn(...args);
    setTimeout(() => {
      throttled = false;
    }, timeMs);
  };
}


