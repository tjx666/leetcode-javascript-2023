import { describe, it, expect } from 'vitest';

import { createLinkListFromArray } from './utils/linklist';
import addTwoNumbers1 from '../solutions/0445-add-two-numbers-ii/solution1';

[addTwoNumbers1].map((addTwoNumbers, index) => {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @param {number[]} sumNums
     */
    function expectDeepEquals(nums1, nums2, sumNums) {
        const num1 = createLinkListFromArray(nums1);
        const num2 = createLinkListFromArray(nums2);
        const sum = createLinkListFromArray(sumNums);
        expect(addTwoNumbers(num1, num2)).deep.eq(sum);
    }

    describe(`0445-add-two-numbers-ii-${index}`, () => {
        it('edge cases', () => {
            expectDeepEquals([0], [0], [0]);

            expectDeepEquals([0], [1], [1]);
            expectDeepEquals([1], [0], [1]);

            expectDeepEquals([0], [1, 2], [1, 2]);
        });

        it('need not carry', () => {
            expectDeepEquals([1, 2, 3], [5, 4, 3], [6, 6, 6]);
            expectDeepEquals([1], [2, 3], [2, 4]);
        });

        it('need carry', () => {
            expectDeepEquals([1], [1, 9], [2, 0]);
            expectDeepEquals([2], [1, 9], [2, 1]);
            expectDeepEquals([2, 1], [1, 8, 1], [2, 0, 2]);
        });

        it('carry to head', () => {
            expectDeepEquals([9, 9, 9], [1], [1, 0, 0, 0]);
            expectDeepEquals([9, 9, 9], [1, 0], [1, 0, 0, 9]);
        });
    });
});
