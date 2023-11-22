/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function permute(nums) {
    const result = [];
    const path = [];
    const len = nums.length;

    function dfs() {
        if (path.length === len) {
            result.push([...path]);
            return;
        }

        const depth = path.length;
        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
            path.push(element);
            [nums[depth], nums[index]] = [nums[index], nums[depth]];
            dfs();
            path.pop();
            [nums[depth], nums[index]] = [nums[index], nums[depth]];
        }
    }

    dfs();

    return result;
}
