/**
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @return {number[]}
 */
export default function inorderTraversal(root) {
    /** @type {number[]} */
    const result = [];

    /**
     * @param {TreeNode} node
     */
    function traverse(node) {
        if (node === null) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}
