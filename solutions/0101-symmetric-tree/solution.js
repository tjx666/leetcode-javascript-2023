/**
 * 思路：递归
 * 时间复杂度：n，每个节点只便利一次
 * 空间复杂度：h
 *
 * 非递归解法无非是 bfs，层序遍历 + 首尾双指针，太简单不写了
 * @param {TreeNode} root
 * @return {boolean}
 */
export default function isSymmetric(root) {
    /**
     * @param {TreeNode} left
     * @param {TreeNode} right
     */
    function checkEqual(left, right) {
        if (left === null && right === null) return true;

        if (left === null || right === null) return false;

        return (
            left.val === right.val &&
            checkEqual(left.left, right.right) &&
            checkEqual(left.right, right.left)
        );
    }

    return checkEqual(root.left, root.right);
}
