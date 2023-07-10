import { it, expect } from 'vitest';
import { createLinkListFromArray } from './utils/linklist';
import middleNode from '../solutions/0876-middle-of-the-linked-list/solution1';

it('0876-middle-of-the-linked-list', () => {
    expect(middleNode(createLinkListFromArray([1])).val).toBe(1);
    expect(middleNode(createLinkListFromArray([1, 2])).val).toBe(2);
    expect(middleNode(createLinkListFromArray([1, 2, 3])).val).toBe(2);
    expect(middleNode(createLinkListFromArray([1, 2, 3, 4])).val).toBe(3);
});
