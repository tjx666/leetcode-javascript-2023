/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
    let result = init;
    for (const num of nums) {
        result = fn(result, num);
    }
    return result;
}
