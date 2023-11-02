/**
 * 思路：直接遍历字符串
 * 时间复杂度：n
 * 空间复杂度：常数级，这个数组中存放的是引用并不是复制的
 * @param {number} n
 * @return {string}
 */
export default function thousandSeparator(n) {
    const str = String(n);
    let i = str.length;
    const segments = [];
    for (; i > 0; i -= 3) {
        segments.unshift(str.slice(Math.max(i - 3, 0), i));
    }
    return segments.join('.');
}
