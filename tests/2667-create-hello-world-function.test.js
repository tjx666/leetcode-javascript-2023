import { expect, test } from 'vitest';
import createHelloWorld from '../solutions/2667-create-hello-world-function/solution1';

test('2667-create-hello-world-function', () => {
    const helloWorld = createHelloWorld();
    expect(helloWorld()).toBe('Hello World');
    expect(helloWorld({}, null, 42)).toBe('Hello World');
});
