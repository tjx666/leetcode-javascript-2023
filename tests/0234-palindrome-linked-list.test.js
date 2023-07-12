import { it, expect } from 'vitest';
import { createLinkListFromArray } from './utils/linklist';
import isPalindrome from '../solutions/0234-palindrome-linked-list/solution1';

it('0234-palindrome-linked-list', () => {
    expect(isPalindrome(createLinkListFromArray([1]))).toBe(true);
    expect(isPalindrome(createLinkListFromArray([1, 2]))).toBe(false);
    expect(isPalindrome(createLinkListFromArray([1, 2, 1]))).toBe(true);
    expect(isPalindrome(createLinkListFromArray([1, 2, 1, 2]))).toBe(false);
    expect(isPalindrome(createLinkListFromArray([1, 2, 2, 1, 3]))).toBe(false);
});
