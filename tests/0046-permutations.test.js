import { expect, test } from 'vitest';
import permute from '../solutions/0046-permutations/solution1';

test('0046-permutations', () => {
    expect(
        permute([1, 2, 3])
            .map((e) => e.join(''))
            .sort(),
    ).deep.eq(
        [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]
            .map((e) => e.join(''))
            .sort(),
    );

    expect(
        permute([0, 1])
            .map((e) => e.join(''))
            .sort(),
    ).deep.eq(
        [
            [0, 1],
            [1, 0],
        ]
            .map((e) => e.join(''))
            .sort(),
    );

    expect(permute([1])).deep.eq([[1]]);
});
