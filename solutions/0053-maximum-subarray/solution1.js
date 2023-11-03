/**
 * 思路: 遍历一遍，碰到和为负数就没有继续加的价值了，一遍遍历一面更新按当前最大和，需要注意全为负数这种情况
 * 时间复杂度：ｎ
 * 空间复杂度：常数级
 * @param {number[]} nums
 * @return {number}
 */
export default function maxSubArray(nums) {
    let maxSum = 0;
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];
        if (num > max) {
            max = num;
        }

        sum = Math.max(num + sum, 0);
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return max < 0 ? max : maxSum;
}
