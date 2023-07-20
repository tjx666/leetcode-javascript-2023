/**
 * 思路：dfs
 * 时间复杂度：n，节点数，每个节点至少遍历一次，不然你不知道那个节点会不会有更深的节点
 * 空间复杂度：h, 树深
 *
 * 非递归就是层序遍历，太简单不写了
 * @param {TreeNode} root
 * @return {number}
 */
export default function maxDepth(root) {
    if (root === null) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
