import { it, expect } from 'vitest';
import inorderTraversal1 from '../solutions/0094-binary-tree-inorder-traversal/solution1';
import inorderTraversal2 from '../solutions/0094-binary-tree-inorder-traversal/solution2';

[inorderTraversal1, inorderTraversal2].forEach((inorderTraversal, index) => {
    it(`0094-binary-tree-inorder-traversal-solution-${index + 1}`, () => {
        expect(inorderTraversal(null)).deep.eq([]);
        expect(
            inorderTraversal({
                val: 0,
                left: null,
                right: null,
            }),
        ).deep.eq([0]);

        expect(
            inorderTraversal({
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
            inorderTraversal({
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
            inorderTraversal({
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
        ).deep.eq([1, 0, 2]);

        expect(
            inorderTraversal({
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
        ).deep.eq([3, 2, 4, 1, 0, 5]);
    });
});
