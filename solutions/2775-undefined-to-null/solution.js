/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var undefinedToNull = function (obj) {
    if (obj === undefined) return null;

    const isObject = obj !== null && typeof obj === 'object';

    if (isObject) {
        for (const [key, value] of Object.entries(obj)) {
            obj[key] = undefinedToNull(value);
        }
    }

    return obj;
};

/**
 * undefinedToNull({"a": undefined, "b": 3}) // {"a": null, "b": 3}
 * undefinedToNull([undefined, undefined]) // [null, null]
 */
