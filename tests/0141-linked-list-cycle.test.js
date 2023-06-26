import { describe, it, expect } from 'vitest';
import hasCycle1 from '../solutions/0141-linked-list-cycle/solution1';
import hasCycle2 from '../solutions/0141-linked-list-cycle/solution2';

import { createLinkListFromArray } from './utils/linklist';

[hasCycle1, hasCycle2].forEach((hasCycle, index) => {
    describe(`0141-linked-list-cycle-${index + 1}`, () => {
        it('edge case', () => {
            // empty
            expect(hasCycle(createLinkListFromArray([]))).toBe(false);
            // one node but no cycle
            expect(hasCycle(createLinkListFromArray([1]))).toBe(false);
            // one node but cycle
            const head = createLinkListFromArray([1]);
            head.next = head;
            expect(hasCycle(head)).toBe(true);
        });

        it('official case1', () => {
            const list = createLinkListFromArray([3, 2, 0, -4]);
            const last = list.next.next.next;
            const second = list.next;
            last.next = second;
            expect(hasCycle(list)).toBe(true);
        });

        it('official case2', () => {
            const list = createLinkListFromArray([1, 2]);
            const last = list.next;
            last.next = list;
            expect(hasCycle(list)).toBe(true);
        });

        it('official case3', () => {
            const list = createLinkListFromArray([1]);
            expect(hasCycle(list)).toBe(false);
        });

        it('official case3', () => {
            const list = createLinkListFromArray([1, 2]);
            expect(hasCycle(list)).toBe(false);
        });
    });
});
