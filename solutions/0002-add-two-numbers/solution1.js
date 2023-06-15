/**
 * https://leetcode.cn/problems/add-two-numbers/
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function addTwoNumbers(l1, l2) {
    const sentinel = { next: null };
    let tail = sentinel;
    let i = l1;
    let j = l2;

    let carry = 0;
    while (i !== null || j !== null || carry !== 0) {
        const sum = (i?.val ?? 0) + (j?.val ?? 0) + carry;
        const newNode = {
            val: sum % 10,
            next: null,
        };
        carry = sum >= 10 ? 1 : 0;
        tail.next = newNode;
        tail = newNode;

        if (i !== null) {
            i = i.next;
        }

        if (j !== null) {
            j = j.next;
        }
    }

    return sentinel.next;
}
