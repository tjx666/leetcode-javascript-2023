import { expect, test } from 'vitest';
import binaryTreePaths from '../solutions/0257-binary-tree-paths/solution1';

test('0257-binary-tree-paths', () => {
    expect(
        binaryTreePaths({
            val: 0,
            left: null,
            right: null,
        }),
    ).deep.eq(['0']);

    expect(
        binaryTreePaths({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: null,
        }),
    ).deep.eq(['0->1']);

    expect(
        binaryTreePaths({
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
    ).deep.eq(['0->1', '0->2']);

    expect(
        binaryTreePaths({
            val: 0,
            left: {
                val: 1,
                left: {
                    val: 2,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: null,
        }),
    ).deep.eq(['0->1->2']);
});
