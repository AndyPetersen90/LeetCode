type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  const start = Date.now();
  let timer: NodeJS.Timeout;
  return function (...args) {
    clearTimeout(timer);
    if (Date.now() - start < t) {
      fn(...args);
    } else {
      timer = setTimeout(() => {
        fn(...args);
      }, t);
    }
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
