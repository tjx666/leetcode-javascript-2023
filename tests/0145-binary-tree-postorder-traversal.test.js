// @ts-check

import { expect, it } from 'vitest';
import postorderTraversal1 from '../solutions/0145-binary-tree-postorder-traversal/solution1';
import postorderTraversal2 from '../solutions/0145-binary-tree-postorder-traversal/solution2';

[postorderTraversal1, postorderTraversal2].forEach((postorderTraversal, index) => {
    it(`0145-binary-tree-postorder-traversal-${index + 1}`, () => {
        // expect(postorderTraversal(null)).deep.eq([]);
        expect(
            postorderTraversal({
                val: 0,
                left: null,
                right: null,
            }),
        ).deep.eq([0]);
        expect(
            postorderTraversal({
                val: 0,
                left: {
                    val: 1,
                    left: null,
                    right: null,
                },
                right: null,
            }),
        ).deep.eq([1, 0]);
        expect(
            postorderTraversal({
                val: 0,
                left: null,
                right: {
                    val: 1,
                    left: null,
                    right: null,
                },
            }),
        ).deep.eq([1, 0]);
        expect(
            postorderTraversal({
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
        ).deep.eq([1, 2, 0]);
        expect(
            postorderTraversal({
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
        ).deep.eq([3, 4, 2, 1, 5, 0]);
    });
});
