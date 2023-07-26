/**
 * 思路：先获取各自从根节点点自身的路径，遍历到第一次两个值不同的节点，前一个节点就是最近祖先，利用回溯法省空间
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export default function lowestCommonAncestor(root, p, q) {
    /** @type {TreeNode[]} */
    const path = [root];
    const foundNodes = new Set([p, q]);
    let path1, path2;

    /**
     * @param {TreeNode} node
     */
    function dfs(node) {
        if (node === null || foundNodes.size === 0) return;

        if (foundNodes.has(node)) {
            const _path = [...path];
            foundNodes.delete(node);
            if (foundNodes.size === 1) {
                path1 = _path;
            } else {
                path2 = _path;
                return;
            }
        }

        path.push(node.left);
        dfs(node.left);
        path.pop();

        path.push(node.right);
        dfs(node.right);
        path.pop();
    }

    dfs(root);

    let i = 0;
    for (; i < path1.length && i < path2.length && path1[i] === path2[i]; i++);
    return path1[i - 1];
}
