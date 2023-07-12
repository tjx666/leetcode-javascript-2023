/**
 * 思路：算数
 * 时间复杂度：n，链表长度
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {number}
 */
export default function getDecimalValue(head) {
    let current = head;
    let sum = 0;

    // 跳过前面的 0
    while (current !== null && current.val === 0) {
        current = current.next;
    }

    while (current !== null) {
        sum = sum * 2 + current.val;
        current = current.next;
    }

    return sum;
}
