import { expect, test } from 'vitest';
import threeSum from '../solutions/0015-3sum/solution1';

test('0015-3sum', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).deep.equals([
        [-1, -1, 2],
        [-1, 0, 1],
    ]);
    expect(threeSum([0, 1, 1])).deep.equals([]);
    expect(threeSum([0, 0, 0])).deep.equals([[0, 0, 0]]);
});
