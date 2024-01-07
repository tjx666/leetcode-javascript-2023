const map = new Map();
let timerKey = -1;

/**
 * @param {Function} fn
 * @param {number} delay
 * @param {number} period
 * @return {number} id
 */
function customInterval(fn, delay, period) {
    timerKey++;

    let count = 0;
    const run = () => {
        const timer = setTimeout(
            () => {
                fn();
                count++;
                run();
            },
            delay + period * count,
        );
        map.set(timerKey, timer);
    };

    run();
    return timerKey;
}

/**
 * @param {number} id
 * @return {void}
 */
function customClearInterval(id) {
    clearTimeout(map.get(id));
    map.delete(id);
}

const t = performance.now();
const result = [];

const fn = () => {
    result.push(Math.floor(performance.now() - t));
};
const id = customInterval(fn, 50, 20);

setTimeout(() => {
    customClearInterval(id);
}, 225);
