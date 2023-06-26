/**
 * 思路：
 * 快慢双指针，i 速度为 1，j 速度为 2，快指针会先进入环，由于快指针每次比慢指针快一步，最终会快环内相遇
 * 如果没有环，则快指针会遍历到 null
 *
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {boolean}
 */
export default function hasCycle(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        // 每次走两步
        fast = fast.next.next;
        // 每次走一步
        slow = slow.next;

        if (fast === slow) return true;
    }

    return false;
}
