/**
 * 思路：
 * 递归，所谓前序遍历，本质就是指遍历顺序为。当前节点 -> 左节点 -> 右节点
 * 遍历一个棵树，可以转换为遍历根节点和递归遍历子树
 *
 * 时间复杂度：n，n 为节点数
 * 空间复杂度：h，树的深度
 *
 * @param {TreeNode | null} root
 * @return {number[]}
 */
export default function preorderTraversal(root) {
    const result = [];

    /**
     * @param {TreeNode} node
     */
    const traverse = (node) => {
        if (node === null) return;

        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);

    return result;
}
