const isObject = (value) => value !== null && typeof value === 'object';

/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */
var jsonStringify = function (object) {
    if (typeof object === 'string') return '"' + object + '"';

    if (!isObject(object)) return String(object);

    if (Array.isArray(object)) {
        const array = object;
        return '[' + array.map((item) => jsonStringify(item)).join(',') + ']';
    }

    return (
        '{' +
        Object.entries(object)
            .map(([key, value]) => `"${key}":${jsonStringify(value)}`)
            .join(',') +
        '}'
    );
};
