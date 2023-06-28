/**
 * 思路：看官方题解第二个思路
 *
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {ListNode | null}
 */
export default function detectCycle(head) {
    let fast = head;
    let slow = head;

    let pointer = head;
    while (fast !== null && fast.next !== null) {
        // 每次走两步
        fast = fast.next.next;
        // 每次走一步
        slow = slow.next;

        if (fast === slow) {
            while (pointer !== slow) {
                pointer = pointer.next;
                slow = slow.next;
            }
            return pointer;
        }
    }

    return null;
}
