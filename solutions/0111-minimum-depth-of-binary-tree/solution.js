/**
 * 思路：dfs 和 bfs 都可，dfs 相对麻烦需要剪枝
 * 时间复杂度：n，单链表的时候
 * 空间复杂度：树宽
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function minDepth(root) {
    if (root === null) return 0;

    const queue = [root];

    let depth = 0;
    while (queue.length > 0) {
        depth++;
        for (let i = 0, len = queue.length; i < len; i++) {
            const front = queue.shift();
            const isLeaf = front.left === null && front.right === null;
            if (isLeaf) {
                return depth;
            }

            if (front.left) {
                queue.push(front.left);
            }

            if (front.right) {
                queue.push(front.right);
            }
        }
    }
    return depth;
}
