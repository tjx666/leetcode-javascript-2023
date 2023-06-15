import addTwoNumbers1 from '../0002-add-two-numbers/solution1';
import reverseList from '../0206-reverse-linked-list/solution3';

/**
 * 思路：先翻转链表，得到结果链表，返回结果链表反转的结果
 * 时间复杂度：m + n
 * 空间复杂度: 1
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function addTwoNumbers(l1, l2) {
    const reversed1 = reverseList(l1);
    const reversed2 = reverseList(l2);
    const sumList = addTwoNumbers1(reversed1, reversed2);
    return reverseList(sumList);
}
