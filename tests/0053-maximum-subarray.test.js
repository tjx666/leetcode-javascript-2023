import { expect, test } from 'vitest';
import maxSubArray from '../solutions/0053-maximum-subarray/solution1';

test('0053-maximum-subarray', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([1])).toBe(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    expect(maxSubArray([-1, -2])).toBe(-1);
    expect(maxSubArray([0])).toBe(0);
});
