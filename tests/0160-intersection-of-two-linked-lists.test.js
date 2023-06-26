import { describe, it, expect } from 'vitest';

import { createLinkListFromArray } from './utils/linklist';
import getIntersectionNode1 from '../solutions/0160-intersection-of-two-linked-lists/solution1';
import getIntersectionNode2 from '../solutions/0160-intersection-of-two-linked-lists/solution2';

[getIntersectionNode1, getIntersectionNode2].forEach((getIntersectionNode, index) => {
    describe(`0160-intersection-of-two-linked-lists-${index + 1}`, () => {
        it('official case1', () => {
            const tail = createLinkListFromArray([8, 4, 5]);
            const head1 = createLinkListFromArray([4, 1]);
            const head2 = createLinkListFromArray([5, 6, 1]);
            head1.next.next = tail;
            head2.next.next.next = tail;
            expect(getIntersectionNode(head1, head2).val).toBe(8);
        });

        it('official case2', () => {
            const tail = createLinkListFromArray([2, 4]);
            const head1 = createLinkListFromArray([1, 9, 1]);
            const head2 = createLinkListFromArray([3]);
            head1.next.next.next = tail;
            head2.next = tail;
            expect(getIntersectionNode(head1, head2).val).toBe(2);
        });

        it('official case3', () => {
            const head1 = createLinkListFromArray([2, 6, 4]);
            const head2 = createLinkListFromArray([1, 5]);
            expect(getIntersectionNode(head1, head2)).toBe(null);
        });

        it('official case4', () => {
            const tail = createLinkListFromArray([3]);
            const head2 = createLinkListFromArray([2]);
            const head1 = tail;
            head2.next = tail;
            expect(getIntersectionNode(head1, head2).val).toBe(3);
        });

        it('not joined and node count same', () => {
            const head1 = createLinkListFromArray([3]);
            const head2 = createLinkListFromArray([2]);
            expect(getIntersectionNode(head1, head2)).toBe(null);
        });

        it('not joined and node count not the same', () => {
            const head1 = createLinkListFromArray([3]);
            const head2 = createLinkListFromArray([2, 4]);
            expect(getIntersectionNode(head1, head2)).toBe(null);
        });

        it('same linklist', () => {
            const head1 = createLinkListFromArray([3]);
            const head2 = head1;
            expect(getIntersectionNode(head1, head2).val).toBe(3);
        });
    });
});
