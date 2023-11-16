import { describe, expect, it, test } from 'vitest';
import compactObject from '../solutions/2705-compact-object/solution1';

describe('2705-compact-object', () => {
    it('array', () => {
        const obj = [null, 0, false, 1];
        expect(compactObject(obj)).deep.eq([1]);
    });

    it('object', () => {
        const obj = { a: null, b: [false, 1] };
        expect(compactObject(obj)).deep.eq({ b: [1] });
    });

    it('nest array', () => {
        const obj = [null, 0, 5, [0], [false, 16]];
        expect(compactObject(obj)).deep.eq([5, [], [16]]);
    });
});
