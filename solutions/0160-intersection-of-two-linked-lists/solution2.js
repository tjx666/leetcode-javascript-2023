/**
 * 思路：
 * 双指针，指针 1 从链表 A 头部遍历到尾部后再从 B 的头部出发，同理指针 2
 * 当指针 1 到达交点处，由于速度相等，走过的路径长度相等，指针 2 必然也到达交点处
 * 如果不相交，相同的节点就是 null
 *
 * 时间复杂度：m + n
 * 空间复杂度：1
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode | null}
 */
export default function getIntersectionNode(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        if (currentA === null) {
            currentA = headB;
        } else {
            currentA = currentA.next;
        }

        if (currentB === null) {
            currentB = headA;
        } else {
            currentB = currentB.next;
        }
    }

    return currentA;
}
