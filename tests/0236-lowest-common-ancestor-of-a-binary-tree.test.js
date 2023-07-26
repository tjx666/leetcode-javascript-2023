import { expect, test } from 'vitest';
import lowestCommonAncestor from '../solutions/0236-lowest-common-ancestor-of-a-binary-tree/solution';

test('0236-lowest-common-ancestor-of-a-binary-tree', () => {
    const tree1 = {
        val: 0,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: null,
    };
    expect(lowestCommonAncestor(tree1, tree1, tree1.left)).toBe(tree1);

    const tree2 = {
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
    };
    expect(lowestCommonAncestor(tree2, tree2.left, tree2.right)).toBe(tree2);
});
