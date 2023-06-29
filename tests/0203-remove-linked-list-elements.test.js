import { describe, expect, it } from 'vitest';
import removeElements1 from '../solutions/0203-remove-linked-list-elements/solution1';
import removeElements2 from '../solutions/0203-remove-linked-list-elements/solution2';
import { createLinkListFromArray as c } from './utils/linklist';

[removeElements1, removeElements2].forEach((removeElements, index) => {
    describe(`0203-remove-linked-list-elements-${index + 1}`, () => {
        it('normal case', () => {
            expect(removeElements(c([1, 2, 6, 3, 4, 5, 6]), 6)).deep.eq(c([1, 2, 3, 4, 5]));
        });

        it('edge case', () => {
            expect(removeElements(c([]), 1)).deep.eq(c([]));
            expect(removeElements(c([1]), 1)).deep.eq(c([]));
            expect(removeElements(c([1, 1]), 1)).deep.eq(c([]));
            expect(removeElements(c([2, 1, 1]), 1)).deep.eq(c([2]));
            expect(removeElements(c([2, 1, 1]), 1)).deep.eq(c([2]));
            expect(removeElements(c([1, 1, 2]), 1)).deep.eq(c([2]));
        });
    });
});
