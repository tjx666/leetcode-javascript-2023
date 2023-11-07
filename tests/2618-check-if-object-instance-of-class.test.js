import { expect, test } from 'vitest';
import checkIfInstanceOf from '../solutions/2618-check-if-object-instance-of-class/solution1';

test('2618-check-if-object-instance-of-class', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBe(true);
    expect(checkIfInstanceOf(null, [])).toBe(false);
    expect(checkIfInstanceOf([null], [])).toBe(false);

    class Animal {}
    class Dog extends Animal {}
    expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);

    expect(checkIfInstanceOf(Date, Date)).toBe(false);

    // 这不扯淡吗？
    expect(checkIfInstanceOf(5, Number)).toBe(true);
});
