/**
 * 思路：递归
 *
 * 时间复杂度：n
 * 空间复杂度：n
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export default function removeElements(head, val) {
    if (head === null) return null;

    if (head.val === val) {
        return removeElements(head.next, val);
    } else {
        head.next = removeElements(head.next, val);
        return head;
    }
}
