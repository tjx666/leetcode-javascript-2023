import { describe, it, expect } from 'vitest';
import detectCycle1 from '../solutions/0142-linked-list-cycle-ii/solution1';
import detectCycle2 from '../solutions/0142-linked-list-cycle-ii/solution2';

import { createLinkListFromArray } from './utils/linklist';

[detectCycle1, detectCycle2].forEach((detectCycle, index) => {
    describe(`0141-linked-list-cycle-ii-${index + 1}`, () => {
        it('edge case', () => {
            // empty
            expect(detectCycle(createLinkListFromArray([]))).toBe(null);
            // one node but no cycle
            expect(detectCycle(createLinkListFromArray([1]))).toBe(null);
            // one node but cycle
            const head = createLinkListFromArray([1]);
            head.next = head;
            expect(detectCycle(head).val).toBe(1);
        });

        it('official case1', () => {
            const list = createLinkListFromArray([3, 2, 0, -4]);
            const last = list.next.next.next;
            const second = list.next;
            last.next = second;
            expect(detectCycle(list).val).toBe(2);
        });

        it('official case2', () => {
            const list = createLinkListFromArray([1, 2]);
            const last = list.next;
            last.next = list;
            expect(detectCycle(list).val).toBe(1);
        });

        it('official case3', () => {
            const list = createLinkListFromArray([1]);
            expect(detectCycle(list)).toBe(null);
        });

        it('official case3', () => {
            const list = createLinkListFromArray([1, 2]);
            expect(detectCycle(list)).toBe(null);
        });
    });
});
