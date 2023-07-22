/**
 * 思路: 看官方题解，解释的很清楚了
 * https://leetcode.cn/problems/diameter-of-binary-tree/solutions/139683/er-cha-shu-de-zhi-jing-by-leetcode-solution/
 * @param {TreeNode} root
 * @return {number}
 */
export default function diameterOfBinaryTree(root) {
    if (root === null) return 0;
    let max = -Number.MAX_VALUE;

    function getDepth(node) {
        if (node === null) return 0;

        const leftDepth = getDepth(node.left);
        const rightDepth = getDepth(node.right);

        const currentMax = leftDepth + 1 + rightDepth;
        if (currentMax > max) {
            max = currentMax;
        }

        return Math.max(leftDepth, rightDepth) + 1;
    }

    getDepth(root);
    return max - 1;
}
