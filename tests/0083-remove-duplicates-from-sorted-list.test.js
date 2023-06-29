import { describe, expect, it } from 'vitest';
import deleteDuplicates from '../solutions/0083-remove-duplicates-from-sorted-list/solution1';
import { createLinkListFromArray as c } from './utils/linklist';

describe('0083-remove-duplicates-from-sorted-list', () => {
    it('normal case', () => {
        expect(deleteDuplicates(c([1, 1, 2]))).deep.eq(c([1, 2]));
        expect(deleteDuplicates(c([1, 1, 2, 3, 3]))).deep.eq(c([1, 2, 3]));
    });

    it('edge case', () => {
        expect(deleteDuplicates(c([]))).deep.eq(c([]));
        expect(deleteDuplicates(c([1]))).deep.eq(c([1]));
        expect(deleteDuplicates(c([1, 1]))).deep.eq(c([1]));
        expect(deleteDuplicates(c([1, 2, 3]))).deep.eq(c([1, 2, 3]));
    });
});
