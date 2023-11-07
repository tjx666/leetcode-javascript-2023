import { expect, test } from 'vitest';
import '../solutions/2619-array-prototype-last/solution1';

test('2619-array-prototype-last', () => {
    expect([null, {}, 3].last()).toBe(3);
    expect([].last()).toBe(-1);
});
