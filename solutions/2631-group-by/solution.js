/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};

    for (const item of this) {
        const key = fn(item);
        const value = result[key] ?? [];
        value.push(item);
        result[key] = value;
    }

    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
