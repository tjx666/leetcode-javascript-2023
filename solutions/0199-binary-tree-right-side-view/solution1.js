/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];
    while (queue.length !== 0) {
        for (let i = 0, length = queue.length; i < length; i++) {
            const front = queue.shift();

            if (front.left) {
                queue.push(front.left);
            }

            if (front.right) {
                queue.push(front.right);
            }

            if (i === length - 1) {
                result.push(front.val);
            }
        }
    }

    return result;
}

// rightSideView({
//     val: 1,
//     left: {
//         val: 2,
//         right: {
//             val: 5,
//         },
//     },
//     right: {
//         val: 3,
//         right: {
//             val: 4,
//         },
//     },
// });

rightSideView({
    val: 1,
    right: {
        val: 3,
    },
});
