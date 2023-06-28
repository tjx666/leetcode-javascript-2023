import { describe, expect, it } from 'vitest';
import mergeTwoLists1 from '../solutions/0021-merge-two-sorted-lists/solution1';
import mergeTwoLists2 from '../solutions/0021-merge-two-sorted-lists/solution2';
import mergeTwoLists3 from '../solutions/0021-merge-two-sorted-lists/solution3';
import { createLinkListFromArray as c } from './utils/linklist';

[mergeTwoLists1, mergeTwoLists2, mergeTwoLists3].forEach((mergeTwoLists, index) => {
    describe(`0021-merge-two-sorted-lists-${index + 1}`, () => {
        it('edge case', () => {
            expect(mergeTwoLists(c([]), c([]))).deep.eq(c([]));
            expect(mergeTwoLists(c([]), c([0]))).deep.eq(c([0]));
            expect(mergeTwoLists(c([]), c([1]))).deep.eq(c([1]));
            expect(mergeTwoLists(c([1]), c([]))).deep.eq(c([1]));
            expect(mergeTwoLists(c([1]), c([1]))).deep.eq(c([1, 1]));
            expect(mergeTwoLists(c([]), c([1, 2]))).deep.eq(c([1, 2]));
        });

        it('normal case', () => {
            expect(mergeTwoLists(c([1, 2, 4]), c([1, 3, 4]))).deep.eq(c([1, 1, 2, 3, 4, 4]));
        });
    });
});
