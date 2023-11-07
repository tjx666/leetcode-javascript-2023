/**
 * 思路：设数组长度为 m，单个字符串长度为 n，时间复杂度尽量控制在 <= m * n，这里直接采用两层循环, 一些特殊情况可以之前得到结果
 * 时间复杂度：m * n
 * 空间复杂度：最大的字符串长度
 * @param {string[]} strs
 * @return {string}
 */
export default function longestCommonPrefix(strs) {
    // 1 <= strs.length <= 200
    let commonPrefix = strs[0];
    for (const str of strs) {
        if (str.length === 0) return '';

        if (str.length < commonPrefix.length) {
            commonPrefix = str;
        }
    }

    for (const str of strs) {
        let j = 0;
        for (; j < commonPrefix.length; j++) {
            if (str[j] !== commonPrefix[j]) break;
        }
        commonPrefix = commonPrefix.slice(0, j);
    }

    return commonPrefix;
}
