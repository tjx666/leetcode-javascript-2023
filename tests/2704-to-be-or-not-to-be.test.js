import assert from 'assert/strict';
import { test } from 'vitest';
import expect from '../solutions/2704-to-be-or-not-to-be/solution1';

test('2704-to-be-or-not-to-be', () => {
    assert(expect(5).toBe(5));
    assert.throws(() => expect(5).toBe(null), Error);
    assert(expect(5).notToBe(null));
});
