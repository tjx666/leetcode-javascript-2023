import { expect, test } from 'vitest';
import diameterOfBinaryTree from '../solutions/0543-diameter-of-binary-tree/solution';

test('0543-diameter-of-binary-tree', () => {
    expect(
        diameterOfBinaryTree({
            val: 0,
            left: null,
            right: null,
        }),
    ).toBe(0);
    expect(
        diameterOfBinaryTree({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: null,
        }),
    ).toBe(1);
    expect(
        diameterOfBinaryTree({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: {
                val: 2,
                left: null,
                right: null,
            },
        }),
    ).toBe(2);
});
