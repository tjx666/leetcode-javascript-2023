import { expect, test } from 'vitest';
import isSameTree from '../solutions/0100-same-tree/solution';

test('0100-same-tree', () => {
    expect(isSameTree(null, null)).toBe(true);
    expect(isSameTree(null, { val: 0, left: null, right: null })).toBe(false);
    expect(isSameTree({ val: 0, left: null, right: null }, null)).toBe(false);

    expect(
        isSameTree({ val: 0, left: null, right: null }, { val: 0, left: null, right: null }),
    ).toBe(true);
    expect(
        isSameTree(
            { val: 0, left: { val: 1, left: null, right: null }, right: null },
            { val: 0, left: null, right: null },
        ),
    ).toBe(false);
    expect(
        isSameTree(
            { val: 0, left: { val: 1, left: null, right: null }, right: null },
            { val: 0, left: null, right: { val: 1, left: null, right: null } },
        ),
    ).toBe(false);
    expect(
        isSameTree(
            {
                val: 0,
                left: { val: 1, left: null, right: null },
                right: { val: 2, left: null, right: null },
            },
            {
                val: 0,
                left: { val: 1, left: null, right: null },
                right: { val: 2, left: null, right: null },
            },
        ),
    ).toBe(true);
});
