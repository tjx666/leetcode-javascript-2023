/**
 * @param {number[]} arr
 * @param {(element: number, index: number) => number} fn
 * @return {number[]}
 */
export default function map(arr, fn) {
    const mapping = [];
    for (const [index, element] of arr.entries()) {
        const newElement = fn(element, index);
        mapping.push(newElement);
    }
    return mapping;
}
