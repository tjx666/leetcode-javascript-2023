/**
 * 思路：使用 js 内置的国际化 API
 * @param {number} n
 * @return {string}
 */
export default function thousandSeparator(n) {
    // return n.toLocaleString('de-DE')
    return new Intl.NumberFormat('en').format(n).replaceAll(',', '.');
}
