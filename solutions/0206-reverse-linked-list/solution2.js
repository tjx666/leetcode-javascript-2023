/**
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：n, n 为递归栈
 *
 * @param {ListNode} head
 * @return {ListNode}
 * @example
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */
export default function reverseList(head) {
    if (head === null || head.next === null) return head;

    const tail = head.next;
    // 先翻转子链表
    const childList = reverseList(head.next);

    // 把头结点放最后
    tail.next = head;
    head.next = null;

    return childList;
}
