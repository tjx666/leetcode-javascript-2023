/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
export default function compactObject(obj) {
    const isArray = Array.isArray(obj);
    const newObj = isArray ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
        if (Boolean(value) !== false) {
            const newValue = typeof value === 'object' ? compactObject(value) : value;
            if (isArray) {
                newObj.push(newValue);
            } else {
                newObj[key] = newValue;
            }
        }
    }
    return newObj;
}
