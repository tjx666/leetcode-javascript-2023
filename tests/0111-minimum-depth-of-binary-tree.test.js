import { expect, test } from 'vitest';
import minDepth from '../solutions/0111-minimum-depth-of-binary-tree/solution';

test('0111-minimum-depth-of-binary-tree', () => {
    expect(minDepth(null)).toBe(0);
    expect(
        minDepth({
            val: 0,
            left: null,
            right: null,
        }),
    ).toBe(1);
    expect(
        minDepth({
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
        minDepth({
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
        minDepth({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: {
                val: 1,
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
            },
        }),
    ).toBe(2);
});
