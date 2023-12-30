/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cacheMap = new Map();

    const memorizedFnName = 'memorized ' + fn.name;
    const obj = {
        [memorizedFnName]: function (...args) {
            const cacheKey = [...cacheMap.keys()].find((params) => {
                return (
                    params.length === args.length &&
                    params.every((param, index) => args[index] === param)
                );
            });
            if (Array.isArray(cacheKey)) {
                return cacheMap.get(cacheKey);
            }

            const result = fn.apply(this, args);
            cacheMap.set(args, result);
            return result;
        },
    };

    return obj[memorizedFnName];
}

function test(...arr) {
    return arr.reduce((a, b) => a + b, 0);
}

const f = memoize(test);
console.log(f());
console.log(f(1));

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
