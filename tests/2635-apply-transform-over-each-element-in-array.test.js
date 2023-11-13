import { expect, test } from 'vitest';
import map from '../solutions/2635-apply-transform-over-each-element-in-array/solution1';

test('2635-apply-transform-over-each-element-in-array', () => {
    expect(
        map([1, 2, 3], function plusone(n) {
            return n + 1;
        }),
    ).deep.eq([2, 3, 4]);
    expect(
        map([1, 2, 3], function plusI(n, i) {
            return n + i;
        }),
    ).deep.eq([1, 3, 5]);
    expect(
        map([10, 20, 30], function constant() {
            return 42;
        }),
    ).deep.eq([42, 42, 42]);
});
