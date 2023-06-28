/**
 * 思路：双指针
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
    while (i !== null || j !== null) {
        const iSmaller = j === null || (i !== null && i.val <= j.val);
        let smaller;
        if (iSmaller) {
            smaller = i;
            if (i !== null) {
                i = i.next;
            }
        } else {
            smaller = j;
            if (j !== null) {
                j = j.next;
            }
        }

        tail.next = smaller;
        tail = smaller;
    }
    return sentinel.next;
}
