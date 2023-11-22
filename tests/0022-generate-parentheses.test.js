import { expect, test } from 'vitest';
import generateParenthesis from '../solutions/0022-generate-parentheses/solution1';

test('0022-generate-parentheses', () => {
    expect(generateParenthesis(1)).deep.eq(['()']);

    expect(generateParenthesis(3).sort()).deep.eq(
        ['((()))', '(()())', '(())()', '()(())', '()()()'].sort(),
    );
});
