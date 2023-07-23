/**
 * 思路：递归
 * 时间复杂度：m + n
 * 空间复杂度：max(m, n)
 * @param {TreeNode | null} root1
 * @param {TreeNode | null} root2
 * @return {TreeNode | null}
 */
export default function mergeTrees(root1, root2) {
    if (root1 === null && root2 === null) return null;

    if (root1 === null || root2 === null) {
        return {
            val: (root1 ?? root2).val,
            left: mergeTrees(root1?.left ?? null, root2?.left ?? null),
            right: mergeTrees(root1?.right ?? null, root2?.right ?? null),
        };
    } else {
        return {
            val: root1.val + root2.val,
            left: mergeTrees(root1.left, root2.left),
            right: mergeTrees(root1.right, root2.right),
        };
    }
}
