/**
 * 思路：双指针，一个快指针每次走两步，慢指针每次走一步
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function middleNode(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}
