/**
 * 思路：在解法一的基础上，如果不新建一条新的链表，而是直接使用两条链表中更长的那条原地修改
 * 时间复杂度：max(m, n), m 是 l1 节点数， n 是 l2 节点数
 * 空间复杂度：1，常数级
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @example
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 */
export default function addTwoNumbers(l1, l2) {
    // 遍历 l1 获取 l1 长度
    // 遍历到倒数第一个节点结束
    let i = l1;
    let len1 = 1;
    while (i.next != null) {
        len1++;
        i = i.next;
    }

    // 遍历 l2 获取 l2 长度
    let j = l2;
    let len2 = 1;
    while (j.next != null) {
        len2++;
        j = j.next;
    }

    // 获取更长的链表以及它的最后一个节点
    let longerList = l1;
    let longerListLast = i;
    if (len1 < len2) {
        longerList = l2;
        longerListLast = j;
    }

    // 重置
    i = l1;
    j = l2;

    let k = longerList;
    let carryBit = 0;
    while (i != null || j != null) {
        const iVal = i == null ? 0 : i.val;
        const jVal = j == null ? 0 : j.val;
        const sum = iVal + jVal + carryBit;
        k.val = sum % 10;
        k = k.next;
        carryBit = sum >= 10 ? 1 : 0;
        if (i != null) i = i.next;
        if (j != null) j = j.next;
    }

    if (carryBit === 1) {
        longerListLast.next = { val: 1, next: null };
    }

    return longerList;
}
