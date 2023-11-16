import { expect, test } from 'vitest';
import join from '../solutions/2722-join-two-arrays-by-id/solution1';

test('2722-join-two-arrays-by-id', () => {
    expect(
        join(
            [
                { id: 1, x: 1 },
                { id: 2, x: 9 },
            ],
            [{ id: 3, x: 5 }],
        ),
    ).deep.eq([
        { id: 1, x: 1 },
        { id: 2, x: 9 },
        { id: 3, x: 5 },
    ]);

    expect(
        join(
            [
                { id: 1, x: 2, y: 3 },
                { id: 2, x: 3, y: 6 },
            ],
            [
                { id: 2, x: 10, y: 20 },
                { id: 3, x: 0, y: 0 },
            ],
        ),
    ).deep.eq([
        { id: 1, x: 2, y: 3 },
        { id: 2, x: 10, y: 20 },
        { id: 3, x: 0, y: 0 },
    ]);

    expect(
        join([{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }], [{ id: 1, b: { c: 84 }, v: [1, 3] }]),
    ).deep.eq([{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]);
});
