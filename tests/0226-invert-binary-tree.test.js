import { expect, test } from 'vitest';
import levelOrder from '../solutions/0102-binary-tree-level-order-traversal/solution1';
import invertTree from '../solutions/0226-invert-binary-tree/solution';

test('0226-invert-binary-tree', () => {
    expect(
        levelOrder(
            invertTree({
                val: 0,
                left: null,
                right: null,
            }),
        ),
    ).deep.eq([[0]]);

    expect(
        levelOrder(
            invertTree({
                val: 0,
                left: {
                    val: 1,
                    left: null,
                    right: null,
                },
                right: null,
            }),
        ),
    ).deep.eq([[0], [1]]);
    expect(
        levelOrder(
            invertTree({
                val: 0,
                left: null,
                right: {
                    val: 1,
                    left: null,
                    right: null,
                },
            }),
        ),
    ).deep.eq([[0], [1]]);
    expect(
        levelOrder(
            invertTree({
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
        ),
    ).deep.eq([[0], [2, 1]]);
    expect(
        levelOrder(
            invertTree({
                val: 0,
                left: {
                    val: 1,
                    left: {
                        val: 2,
                        left: {
                            val: 3,
                            left: null,
                            right: null,
                        },
                        right: {
                            val: 4,
                            left: null,
                            right: null,
                        },
                    },
                    right: null,
                },
                right: {
                    val: 5,
                    left: null,
                    right: null,
                },
            }),
        ),
    ).deep.eq([[0], [5, 1], [2], [4, 3]]);
});
