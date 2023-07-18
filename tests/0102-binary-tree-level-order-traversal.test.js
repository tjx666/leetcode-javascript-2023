import { test, expect } from 'vitest';
import levelOrder from '../solutions/0102-binary-tree-level-order-traversal/solution1';

test(`0102-binary-tree-level-order-traversal`, () => {
    // expect(levelOrder(null)).deep.eq([]);
    expect(
        levelOrder({
            val: 0,
            left: null,
            right: null,
        }),
    ).deep.eq([[0]]);
    expect(
        levelOrder({
            val: 0,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: null,
        }),
    ).deep.eq([[0], [1]]);
    expect(
        levelOrder({
            val: 0,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null,
            },
        }),
    ).deep.eq([[0], [1]]);
    expect(
        levelOrder({
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
    ).deep.eq([[0], [1, 2]]);
    expect(
        levelOrder({
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
    ).deep.eq([[0], [1, 5], [2], [3, 4]]);
});
