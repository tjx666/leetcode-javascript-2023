/**
 * 思路：队列，先进先出
 * 时间复杂度：n 节点数
 * 空间复杂度：h 树的宽度，极端情况单链表，那就是 n
 * @param {TreeNode} root
 * @return {number[][]}
 */
export default function levelOrder(root) {
    if (root === null) return [];

    /** @type {TreeNode[]} */
    const queue = [root];
    const result = [];

    while (queue.length) {
        const floor = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const front = queue.shift();
            floor.push(front.val);

            if (front.left) {
                queue.push(front.left);
            }

            if (front.right) {
                queue.push(front.right);
            }
        }
        result.push(floor);
    }

    return result;
}
