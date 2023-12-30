/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const root = new Map();

    const memorizedFnName = 'memorized ' + fn.name;
    const resultKey = Symbol();
    const obj = {
        [memorizedFnName]: function (...args) {
            let node = root;
            for (let i = 0; i < args.length; i++) {
                let arg = args[i];
                if (!node.has(arg)) {
                    const newNode = new Map();
                    node.set(arg, newNode);
                    node = newNode;
                } else {
                    node = node.get(arg);
                }
            }

            if (!node.has(resultKey)) {
                const result = fn.apply(this, args);
                node.set(resultKey, result);
                return result;
            }

            return node.get(resultKey);
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
