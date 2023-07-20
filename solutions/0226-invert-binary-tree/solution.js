/**
 * 思路：递归，翻转一棵树，等于翻转左右节点，再将左右子树递归翻转
 * 时间复杂度：n，每个节点遍历一次
 * 空间复杂度：1
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function invertTree(root) {
    if (root === null) return root;

    // 交换左右节点
    [root.left, root.right] = [root.right, root.left];

    // 递归翻转左右子树
    invertTree(root.left);
    invertTree(root.right);

    return root;
}
