import { describe, it, expect } from 'vitest';

import { createLinkListFromArray } from './utils/linklist';
import addTwoNumbers1 from '../solutions/0002-add-two-numbers/solution1';
import addTwoNumbers2 from '../solutions/0002-add-two-numbers/solution2';
import addTwoNumbers3 from '../solutions/0002-add-two-numbers/solution3';

[addTwoNumbers1, addTwoNumbers2, addTwoNumbers3].map((addTwoNumbers, index) => {
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

    describe(`0002-add-two-numbers-${index}`, () => {
        it('edge cases', () => {
            expectDeepEquals([0], [0], [0]);

            expectDeepEquals([0], [1], [1]);
            expectDeepEquals([1], [0], [1]);

            expectDeepEquals([0], [1, 2], [1, 2]);
        });

        it('need not carry', () => {
            expectDeepEquals([1, 2, 3], [5, 4, 3], [6, 6, 6]);
            expectDeepEquals([1], [2, 3], [3, 3]);
        });

        it('need carry', () => {
            expectDeepEquals([1], [9, 1], [0, 2]);
            expectDeepEquals([2], [9, 1], [1, 2]);
            expectDeepEquals([1, 2], [1, 8, 1], [2, 0, 2]);
        });

        it('carry to head', () => {
            expectDeepEquals([9, 9, 9], [1], [0, 0, 0, 1]);
            expectDeepEquals([9, 9, 9], [0, 1], [9, 0, 0, 1]);
        });
    });
});
