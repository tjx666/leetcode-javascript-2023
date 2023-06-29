/**
 * 思路：原地删除，使用伪节点可以让所有节点统一操作
 * 注意点：如果元素被删除了 previous 不需要更新
 *
 * 时间复杂度：n
 * 空间复杂度：1
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export default function removeElements(head, val) {
    const sentinel = { next: head };
    let current = head;
    let previous = sentinel;
    while (current !== null) {
        if (current.val === val) {
            previous.next = current.next;
        } else {
            previous = current;
        }
        current = current.next;
    }

    return sentinel.next;
}
