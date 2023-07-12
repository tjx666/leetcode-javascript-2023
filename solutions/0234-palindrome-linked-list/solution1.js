/**
 * 思路：递归，本质是双向遍历，1 递归调用后访问可以实现反向遍历，同时使用正向遍历指针
 * 时间复杂度：n
 * 空间复杂度：n，递归需要栈空间
 * @param {ListNode} head
 * @return {boolean}
 */
export default function isPalindrome(head) {
    let frontNode = head;
    function traverse(node) {
        if (node === null) return true;

        if (traverse(node.next) === false) return false;

        if (frontNode.val !== node.val) return false;
        frontNode = frontNode.next;
        return true;
    }

    return traverse(head);
}
