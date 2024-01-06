const isNoneArrayObject = (value) =>
    !Array.isArray(value) && value !== null && typeof value === 'object';

/**
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @return {Object|Array}
 */
function objDiff(obj1, obj2) {
    const isBothArray = Array.isArray(obj1) && Array.isArray(obj2);
    const isBothNoneArrayObject = isNoneArrayObject(obj1) && isNoneArrayObject(obj2);
    if (isBothArray || isBothNoneArrayObject) {
        const diff = {};
        for (const key of Object.keys(obj2)) {
            if (key in obj1) {
                if (obj2[key] === obj1[key]) {
                    continue;
                } else {
                    const childDiff = objDiff(obj1[key], obj2[key]);
                    if (Object.keys(childDiff).length === 0) continue;

                    diff[key] = childDiff;
                }
            }
        }
        return diff;
    }

    return [obj1, obj2];
}

const obj1 = {
    a: 5,
    v: 6,
    z: [1, 2, 4, [2, 5, 7]],
};
const obj2 = {
    a: 5,
    v: 7,
    z: [1, 2, 3, [1]],
};
console.log(JSON.stringify(objDiff(obj1, obj2), null, 4));
