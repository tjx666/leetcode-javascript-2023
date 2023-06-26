/**
 * 思路：
 * 一直遍历，如果碰到遍历过的节点就有环，并且这个节点就是环的入口
 * 使用 Set 空间换时间，并且 Set 操作的复杂度都是 1
 *
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {ListNode} head
 * @return {boolean}
 */
export default function hasCycle(head) {
    const visited = new Set([]);
    let current = head;
    while (current !== null) {
        if (visited.has(current)) {
            return true;
        } else {
            visited.add(current);
        }
        current = current.next;
    }

    // 没有环最终 current 为 null
    return false;
}
