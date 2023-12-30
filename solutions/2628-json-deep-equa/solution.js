const isObject = (value) => value !== null && typeof value === 'object';
const toTypeString = (value) => Object.prototype.toString.call(value);

/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (isObject(o1) && isObject(o2)) {
        const keys1 = Object.keys(o1);
        const keys2 = Object.keys(o2);
        return (
            toTypeString(o1) === toTypeString(o2) &&
            keys1.length === keys2.length &&
            keys1.every((k1) => areDeeplyEqual(o1[k1], o2[k1]))
        );
    }

    return o1 === o2;
};
