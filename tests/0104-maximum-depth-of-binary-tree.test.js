import { expect, test } from 'vitest';
import maxDepth from '../solutions/0104-maximum-depth-of-binary-tree/solution1';

test('0104-maximum-depth-of-binary-tree', () => {
    expect(maxDepth(null)).toBe(0);
    expect(
        maxDepth({
            val: 0,
            left: null,
            right: null,
        }),
    ).toBe(1);
    expect(
        maxDepth({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: null,
        }),
    ).toBe(2);
    expect(
        maxDepth({
            val: 0,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null,
            },
        }),
    ).toBe(2);
    expect(
        maxDepth({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: {
                val: 1,
                left: null,
                right: null,
            },
        }),
    ).toBe(2);
});
