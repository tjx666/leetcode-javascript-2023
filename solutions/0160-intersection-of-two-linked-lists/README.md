# [160. 相交链表](hhttps://leetcode.cn/problems/intersection-of-two-linked-lists)

<img src="https://img.shields.io/badge/easy-green" />

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

提示：

listA 中节点数目为 m
listB 中节点数目为 n
1 <= m, n <= 3 \* 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
如果 listA 和 listB 没有交点，intersectVal 为 0
如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]

进阶：你能否设计一个时间复杂度 O(m + n) 、仅用 O(1) 内存的解决方案？
