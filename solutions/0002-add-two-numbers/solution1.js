/**
 * 思路：双指针
 * 数据复杂度：max(m, n)
 * 空间复杂度：0
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} 新链表，不参与空间复杂度计算，题目没说是要求返回新链表，但是多数情况下返回新链表更不容易出问题
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
