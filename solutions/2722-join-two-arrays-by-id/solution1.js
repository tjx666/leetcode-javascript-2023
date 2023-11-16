/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
export default function join(arr1, arr2) {
    const map = new Map();
    for (const obj of [...arr1, ...arr2]) {
        const { id } = obj;

        if (!map.has(id)) {
            map.set(id, obj);
        } else {
            map.set(id, {
                ...map.get(id),
                ...obj,
            });
        }
    }

    return [...map.values()].sort((a, b) => a.id - b.id);
}
