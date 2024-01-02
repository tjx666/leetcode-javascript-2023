const isObject = (value) => value !== null && typeof value === 'object';

/**
 * @param {null|boolean|number|string|Array|Object} obj1
 * @param {null|boolean|number|string|Array|Object} obj2
 * @return {null|boolean|number|string|Array|Object}
 */
function deepMerge(obj1, obj2) {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        const newArray = Array.from({ length: Math.max(obj1.length, obj2.length) });
        for (let i = 0, length = Math.min(obj1.length, obj2.length); i < length; i++) {
            newArray[i] = deepMerge(obj1[i], obj2[i]);
        }

        if (obj1.length > obj2.length) {
            for (let i = obj2.length; i < obj1.length; i++) {
                newArray[i] = obj1[i];
            }
        } else {
            for (let i = obj1.length; i < obj2.length; i++) {
                newArray[i] = obj2[i];
            }
        }

        return newArray;
    }

    if (isObject(obj1) && !Array.isArray(obj1) && isObject(obj2) && !Array.isArray(obj2)) {
        const newObj = { ...obj1 };
        for (const key of Object.keys(obj2)) {
            if (key in obj1) {
                newObj[key] = deepMerge(obj1[key], obj2[key]);
            } else {
                newObj[key] = obj2[key];
            }
        }
        return newObj;
    }

    return obj2;
}

/**
 * let obj1 = {"a": 1, "c": 3}, obj2 = {"a": 2, "b": 2};
 * deepMerge(obj1, obj2); // {"a": 2, "c": 3, "b": 2}
 */

deepMerge([{}, 2, 3], [[], 5]);
