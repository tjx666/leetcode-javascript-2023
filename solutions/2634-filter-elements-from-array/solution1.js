/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
    const result = [];

    for (const [index, ele] of arr.entries()) {
        if (Boolean(fn(ele, index))) {
            result.push(ele);
        }
    }

    return result;
}
