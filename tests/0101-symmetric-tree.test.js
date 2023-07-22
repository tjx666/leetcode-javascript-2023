import { expect, test } from 'vitest';
import isSymmetric from '../solutions/0101-symmetric-tree/solution';

test('0101-symmetric-tree', () => {
    expect(
        isSymmetric({
            val: 0,
            left: null,
            right: null,
        }),
    ).toBe(true);

    expect(
        isSymmetric({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: null,
        }),
    ).toBe(false);

    expect(
        isSymmetric({
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
    ).toBe(true);

    expect(
        isSymmetric({
            val: 0,
            left: {
                val: 1,
                left: {
                    val: 2,
                    left: null,
                    right: null,
                },
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 1,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: {
                    val: 2,
                    left: null,
                    right: null,
                },
            },
        }),
    ).toBe(true);
});
