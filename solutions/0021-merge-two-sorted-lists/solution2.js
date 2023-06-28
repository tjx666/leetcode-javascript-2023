/**
 * 思路：双指针，在解法 1 的基础上，当一个链表遍历完直接跳出循环
 *
 * 时间复杂度：m + n
 * 空间复杂度：1
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export default function mergeTwoLists(list1, list2) {
    const sentinel = { next: null };
    let tail = sentinel;

    let i = list1;
    let j = list2;
    while (i !== null && j !== null) {
        if (i.val <= j.val) {
            tail.next = i;
            tail = i;
            i = i.next;
        } else {
            tail.next = j;
            tail = j;
            j = j.next;
        }
    }

    tail.next = i === null ? j : i;
    return sentinel.next;
}
