/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cacheMap = new Map();

    return function (...args) {
        const [a, b] = args;
        const key = `${a}-${b ?? ''}`;
        if (cacheMap.has(key)) return cacheMap.get(key);

        const result = fn.apply(this, args);
        cacheMap.set(key, result);
        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
