/**
 * 思路：全排列 + 两数之和
 * 时间复杂度：n2
 * 空间复杂度：常数级
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function threeSum(nums) {
    nums = nums.sort((a, b) => a - b);

    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let k = nums.length - 1;
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            const target = 0 - nums[i] - nums[j];

            // 不需要判断重复，因为 nums[j] 会增大
            while (k > j && nums[k] > target) {
                k--;
            }

            if (j == k) break;

            if (nums[k] === target) {
                result.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    return result;
}
