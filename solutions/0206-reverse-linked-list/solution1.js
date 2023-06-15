/**
 * 思路：头插法
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
    const sentinel = { next: null };
    let current = head;
    while (current !== null) {
        const { next } = current;
        current.next = sentinel.next;
        sentinel.next = current;
        current = next;
    }
    return sentinel.next;
}
