/**
 * 思路：递归
 * 时间复杂度：m + n
 * 空间复杂度：Max(m, n)
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @return {boolean}
 */
export default function isSameTree(p, q) {
    if (p === null && q === null) return true;

    if (p === null || q === null) return false;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
