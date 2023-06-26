import { describe, it, expect } from 'vitest';

import { createLinkListFromArray } from './utils/linklist';
import reverseList1 from '../solutions/0206-reverse-linked-list/solution1';
import reverseList2 from '../solutions/0206-reverse-linked-list/solution2';
import reverseList3 from '../solutions/0206-reverse-linked-list/solution3';

[reverseList1, reverseList2, reverseList3].forEach((reverseList, index) => {
    describe(`0206-reverse-linked-list-${index + 1}`, () => {
        it('edge case', () => {
            expect(reverseList(createLinkListFromArray([]))).deep.eq(createLinkListFromArray([]));
            expect(reverseList(createLinkListFromArray([1]))).deep.eq(createLinkListFromArray([1]));
        });

        it('basic', () => {
            expect(reverseList(createLinkListFromArray([1, 2, 3, 4]))).deep.eq(
                createLinkListFromArray([4, 3, 2, 1]),
            );
        });
    });
});
