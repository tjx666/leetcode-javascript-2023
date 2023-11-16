import { expect, test } from 'vitest';
import isEmpty from '../solutions/2727-is-object-empty/solution1';

test('2727-is-object-empty', () => {
    expect(isEmpty({ x: 5, y: 42 })).toBe(false);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([null, false, 0])).toBe(false);
    expect(isEmpty(new Array(3))).toBe(false);
});
