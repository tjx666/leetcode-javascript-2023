import { describe, expect, it } from 'vitest';
import longestCommonPrefix from '../solutions/0014-Longest Common Prefix/solution';

describe('0014-Longest Common Prefix', () => {
    it('return longest common prefix', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    });

    it('return empty string when no common prefix', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    });

    it('edge cases', () => {
        expect(longestCommonPrefix(['abc'])).toBe('abc');
        expect(longestCommonPrefix(['abc', ''])).toBe('');
    });
});
