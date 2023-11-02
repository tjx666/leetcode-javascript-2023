import { test, expect } from 'vitest';
import thousandSeparator1 from '../solutions/1556-thousand-separator/solution1';
import thousandSeparator2 from '../solutions/1556-thousand-separator/solution2';

[thousandSeparator1, thousandSeparator2].forEach((thousandSeparator, index) => {
    test(`1556-thousand-separator-${index + 1}`, () => {
        expect(thousandSeparator(987)).toBe('987');
        expect(thousandSeparator(1234)).toBe('1.234');
        expect(thousandSeparator(123456789)).toBe('123.456.789');
        expect(thousandSeparator(0)).toBe('0');
    });
});
