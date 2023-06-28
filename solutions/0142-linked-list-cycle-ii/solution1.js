/**
 * 和环形链表 I 的区别在于 II 需要返回环入口
 * 思路：直接使用环形链表 I 的第一种解法，只不过调整下返回值
 *
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {ListNode} head
 * @return {ListNode | null}
 */
export default function detectCycle(head) {
    const visited = new Set([]);
    let current = head;
    while (current !== null) {
        if (visited.has(current)) {
            return current;
        } else {
            visited.add(current);
        }
        current = current.next;
    }

    // 没有环最终 current 为 null
    return null;
}
