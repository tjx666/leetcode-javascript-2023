/**
 * 思路：闭包的基础应用
 * @param {number} n
 * @return {Function} counter
 */
export default function createCounter(n) {
    return function () {
        return n++;
    };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
