/**
 * @param {string} val
 * @return {{ toBe: () => boolean; notToBe: () => boolean }}
 */
export default function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                return true;
            } else {
                throw new Error('Not Equal');
            }
        },
        notToBe(expected) {
            if (actual !== expected) {
                return true;
            } else {
                throw new Error('Equal');
            }
        },
    };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
