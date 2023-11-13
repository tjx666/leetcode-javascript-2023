/**
 * @param {Function} fn
 * @return {Function}
 */
export default function once(fn) {
    let called = false;
    const fnName = fn.name;
    const obj = {
        // 使用对象属性是为了保持函数的 name 相同
        [fnName]: function (...args) {
            if (!called) {
                // 保持 this 指向相同
                const result = fn.call(this, ...args);
                called = true;
                return result;
            }
            return undefined;
        },
    };
    return obj[fnName];
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
