export function createRandomInteger(min = 0, max = Number.MAX_SAFE_INTEGER) {
    const distance = max - min;
    const randomIncrescent = Math.floor(Math.random() * (distance + 1));
    return min + randomIncrescent;
}
