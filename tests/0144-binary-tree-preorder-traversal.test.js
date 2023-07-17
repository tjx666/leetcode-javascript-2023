// @ts-check

import { expect, it } from 'vitest';
import preorderTraversal1 from '../solutions/0144-binary-tree-preorder-traversal/solution1';
import preorderTraversal2 from '../solutions/0144-binary-tree-preorder-traversal/solution2';

[preorderTraversal1, preorderTraversal2].forEach((preorderTraversal, index) => {
    it(`0144-binary-tree-preorder-traversal-${index + 1}`, () => {
        expect(preorderTraversal(null)).deep.eq([]);
        expect(
            preorderTraversal({
                val: 0,
                left: null,
                right: null,
            }),
        ).deep.eq([0]);

        expect(
            preorderTraversal({
                val: 0,
                left: {
                    val: 1,
                    left: null,
                    right: null,
                },
                right: null,
            }),
        ).deep.eq([0, 1]);

        expect(
            preorderTraversal({
                val: 0,
                left: null,
                right: {
                    val: 1,
                    left: null,
                    right: null,
                },
            }),
        ).deep.eq([0, 1]);

        expect(
            preorderTraversal({
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
        ).deep.eq([0, 1, 2]);

        expect(
            preorderTraversal({
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
        ).deep.eq([0, 1, 2, 3, 4, 5]);
    });
});
