/**
 * 思路：递归
 *
 * 时间复杂度：m + n
 * 空间复杂度：1
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export default function mergeTwoLists(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}
