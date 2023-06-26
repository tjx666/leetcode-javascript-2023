/**
 * 思路：
 * 先遍历其中一条，把遍历过的节点存到 Set，再遍历另一条，直到遍历到的某个节点是已经存在于 Set 中
 * 那么这个节点就是相交节点
 *
 * 时间复杂度：m + n
 * 空间复杂度：m
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode | null}
 */
export default function getIntersectionNode(headA, headB) {
    const visited = new Set([headA]);

    // 变量链表 A 并把节点都放到 set
    let current = headA.next;
    while (current !== null) {
        visited.add(current);
        current = current.next;
    }

    current = headB;
    while (current !== null) {
        // 碰到已经遍历过的节点就是相交节点
        if (visited.has(current)) {
            return current;
        }
        current = current.next;
    }

    // 没有相交节点返回 null
    return null;
}
