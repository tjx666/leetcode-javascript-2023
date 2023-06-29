/**
 * 思路：双指针，不要每次碰到重复的就删除，使用额外的节点保存最后一个不重复节点
 * 递归解法就不写了，没多大意思，性能还差
 * 时间复杂度：n
 * 空间复杂度：1
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function deleteDuplicates(head) {
    // val 不和头结点值一样就行
    const sentinel = { next: head, val: (head?.val ?? -1) + 1 };
    let tail = sentinel;
    let previous = sentinel;
    let current = head;
    while (current !== null) {
        if (current.val !== previous.val) {
            tail.next = current;
            tail = current;
        }
        previous = current;
        current = current.next;
    }

    // 如果最后一段有重复
    tail.next = null;
    return sentinel.next;
}
