/**
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode | null} root
 * @return {number[]}
 */
export default function postorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node === null) return;

        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }

    traverse(root);
    return result;
}
