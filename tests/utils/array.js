import { createRandomInteger } from './number';

/**
 * @param {number} maxLength
 * @param {Parameters<ArrayConstructor['from']>[1]} mapFunc
 */
export function createRandomLengthArray(maxLength = 100, mapFunc) {
    const length = Math.floor(Math.random() * maxLength);
    return Array.from({ length }, mapFunc);
}

export function createRandomIntegersArray(maxLength, min, max) {
    return createRandomLengthArray(maxLength, () => createRandomInteger(min, max));
}
