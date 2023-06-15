/**
 * 思路：原地翻转
 * 时间复杂度：n
 * 空间复杂度：1
 *
 * @param {ListNode} head
 * @return {ListNode}
 * @example
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */
export default function reverseList(head) {
    let pre = null;
    let current = head;
    while (current !== null) {
        const { next } = current;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}
