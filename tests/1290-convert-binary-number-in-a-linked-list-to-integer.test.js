import { it, expect } from 'vitest';
import { createLinkListFromArray } from './utils/linklist';
import getDecimalValue from '../solutions/1290-convert-binary-number-in-a-linked-list-to-integer/solution1';

it('1290-convert-binary-number-in-a-linked-list-to-integer', () => {
    expect(getDecimalValue(createLinkListFromArray([0]))).toBe(0);
    expect(getDecimalValue(createLinkListFromArray([1]))).toBe(1);

    expect(getDecimalValue(createLinkListFromArray([0, 0]))).toBe(0);
    expect(getDecimalValue(createLinkListFromArray([0, 0, 0]))).toBe(0);

    expect(getDecimalValue(createLinkListFromArray([0, 1]))).toBe(1);
    expect(getDecimalValue(createLinkListFromArray([0, 1, 0]))).toBe(2);

    expect(getDecimalValue(createLinkListFromArray([1, 0, 0]))).toBe(4);
    expect(getDecimalValue(createLinkListFromArray([1, 0, 1]))).toBe(5);
    expect(getDecimalValue(createLinkListFromArray([1, 1, 1]))).toBe(7);
});
