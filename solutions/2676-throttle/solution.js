/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function throttle(fn, t) {
    let lastExecuteTime;
    let delayTimer;
    const execute = (_this, args) => {
        fn.apply(_this, args);
        lastExecuteTime = Date.now();
    };

    return function (...args) {
        if (lastExecuteTime === undefined) {
            execute(this, args);
            return;
        }

        const now = Date.now();
        if (now - lastExecuteTime >= t) {
            execute(this, args);
            return;
        } else {
            if (delayTimer) {
                clearTimeout(delayTimer);
            }

            delayTimer = setTimeout(
                () => {
                    execute(this, args);
                    delayTimer = undefined;
                },
                t - (now - lastExecuteTime),
            );
        }
    };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
