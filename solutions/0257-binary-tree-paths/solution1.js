/**
 * 思路：回溯 + dfs，回溯是为了省空间
 * 时间复杂度：n，每个节点遍历一次
 * 空间复杂度：h，树深，最差为 n，单链表
 * @param {TreeNode} root
 * @return {string[]}
 */
export default function binaryTreePaths(root) {
    /** @type {string[]} */
    const result = [];

    function traverse(node, path) {
        const isLeaf = node.left === null && node.right === null;
        if (isLeaf) {
            result.push(path.join('->'));
            return;
        }

        if (node.left) {
            path.push(node.left.val);
            traverse(node.left, path);
            path.pop();
        }

        if (node.right) {
            path.push(node.right.val);
            traverse(node.right, path);
            path.pop();
        }
    }

    traverse(root, [root.val]);
    return result;
}
