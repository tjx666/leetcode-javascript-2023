/**
 * 思路：迭代，栈，先进后出
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode | null} root
 * @return {number[]}
 */
export default function postorderTraversal(root) {
    const result = [];
    /** @type {TreeNode[]} */
    const stack = [];
    let previousPop = null;

    let current = root;
    while (current || stack.length > 0) {
        if (current !== null) {
            stack.push(current);
            current = current.left;
        } else {
            const top = stack[stack.length - 1];
            if (top.right && !(previousPop && top.right === previousPop)) {
                current = top.right;
            } else {
                previousPop = stack.pop();
                result.push(top.val);
            }
        }
    }

    return result;
}

//       1
//    2      5
// 3    4  6   7
