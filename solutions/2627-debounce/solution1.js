/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
export default function debounce(fn, t) {
    let timer;
    return function (...args) {
        if (timer !== undefined) {
            clearTimeout(timer);
        }

        return new Promise((resolve, reject) => {
            timer = setTimeout(() => {
                timer = undefined;
                Promise.resolve(fn.call(this, ...args)).then(resolve, reject);
            }, t);
        });
    };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
