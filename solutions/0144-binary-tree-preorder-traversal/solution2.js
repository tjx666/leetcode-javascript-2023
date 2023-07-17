/**
 * 思路：需要先进后出，可以使用栈来模拟遍历顺序
 *
 * 时间复杂度：n，n 为节点数
 * 空间复杂度：h，树的深度
 *
 * @param {TreeNode | null} root
 * @return {number[]}
 */
export default function preorderTraversal(root) {
    /** @type {number[]} */
    const result = [];

    /** @type {TreeNode[]} */
    const stack = [];

    let current = root;
    while (current !== null || stack.length !== 0) {
        if (current === null) {
            const right = stack.pop();
            current = right;
        }

        result.push(current.val);
        // 放进栈里，为的是左节点遍历完遍历右节点
        if (current.right) {
            stack.push(current.right);
        }
        // 一直遍历左节点
        current = current.left;
    }

    return result;
}
