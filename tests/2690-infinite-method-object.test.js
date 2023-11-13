import { expect, test } from 'vitest';
import createInfiniteObject from '../solutions/2690-infinite-method-object/solution1';

test('2690-infinite-method-object', () => {
    const obj = createInfiniteObject();

    expect(obj.abc123()).toBe('abc123');
    expect(obj['.-qw73n|^2It']()).toBe('.-qw73n|^2It');
});
