/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
export default function isEmpty(obj) {
    return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0;
}
