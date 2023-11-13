import { describe, it, expect } from 'vitest';
import once from '../solutions/2666-allow-one-function-call/solution1';

describe('2666-allow-one-function-call', () => {
    it('plus', () => {
        const fn = (a, b, c) => a + b + c;
        const oncedFn = once(fn);

        expect(oncedFn(1, 2, 3)).toBe(6);
        expect(oncedFn(2, 3, 6)).toBe(undefined);
    });

    it('multiple', () => {
        const fn = (a, b, c) => a * b * c;
        const oncedFn = once(fn);

        expect(oncedFn.name).toBe(fn.name);
        expect(oncedFn(5, 7, 4)).toBe(140);
        expect(oncedFn(2, 3, 6)).toBe(undefined);
        expect(oncedFn(4, 6, 8)).toBe(undefined);
    });

    it('keep fn name', () => {
        const fn = (a, b, c) => a * b * c;
        const oncedFn = once(fn);

        expect(oncedFn.name).toBe(fn.name);
    });

    it('keep this', () => {
        const fn = function () {
            return this;
        };
        const oncedFn = once(fn);

        const obj = {};
        expect(oncedFn.call(obj)).toBe(obj);
    });
});
