/**
 * 思路：迭代，栈，先进后出
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @return {number[]}
 */
export default function inorderTraversal(root) {
    /** @type {TreeNode[]} */
    const stack = [];
    const result = [];

    let current = root;
    while (current !== null || stack.length > 0) {
        if (current === null) {
            const top = stack.pop();
            result.push(top.val);
            current = top.right;
        } else {
            stack.push(current);
            current = current.left;
        }
    }

    return result;
}
