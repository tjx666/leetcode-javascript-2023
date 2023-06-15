/**
 * 思路：递归
 * 时间复杂度：max(m, n)
 * 空间复杂度：max(m, n)
 */
export default function addTwoNumbers(l1, l2) {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @param {number} carry
     * @return {ListNode}
     */
    function _addTwoNumbers(l1, l2, carry) {
        if (l1 === null && l2 === null && carry === 0) return null;

        const head1 = l1;
        const head2 = l2;
        const sum = (head1?.val ?? 0) + (head2?.val ?? 0) + carry;
        const newNode = {
            val: sum % 10,
            next: _addTwoNumbers(l1?.next ?? null, l2?.next ?? null, sum >= 10 ? 1 : 0),
        };
        return newNode;
    }

    return _addTwoNumbers(l1, l2, 0);
}
