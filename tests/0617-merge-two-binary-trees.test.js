import { expect, test } from 'vitest';
import mergeTrees from '../solutions/0617-merge-two-binary-trees/solution';

test('0617-merge-two-binary-trees', () => {
    expect(mergeTrees(null, null)).toBe(null);

    expect(mergeTrees(null, { val: 1, left: null, right: null })).deep.eq({
        val: 1,
        left: null,
        right: null,
    });

    expect(mergeTrees({ val: 1, left: null, right: null }, null)).deep.eq({
        val: 1,
        left: null,
        right: null,
    });

    expect(
        mergeTrees({ val: 1, left: null, right: null }, { val: 2, left: null, right: null }),
    ).deep.eq({
        val: 3,
        left: null,
        right: null,
    });

    expect(
        mergeTrees(
            { val: 1, left: { val: 2, left: null, right: null }, right: null },
            { val: 2, left: null, right: { val: 3, left: null, right: null } },
        ),
    ).deep.eq({
        val: 3,
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
    });

    expect(
        mergeTrees(
            { val: 1, left: { val: 2, left: null, right: null }, right: null },
            {
                val: 2,
                left: { val: 1, left: null, right: null },
                right: { val: 3, left: null, right: null },
            },
        ),
    ).deep.eq({
        val: 3,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 3,
            left: null,
            right: null,
        },
    });
});
