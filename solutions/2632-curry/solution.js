/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
    const argsStore = [];

    return function curried(...args) {
        argsStore.push(...args);
        if (argsStore.length >= fn.length) {
            return fn.apply(this, ...argsStore);
        }

        return curried;
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
