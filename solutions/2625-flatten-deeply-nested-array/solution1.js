/**
 * @param {Array} arr
 * @param {number} n 表示拍平数组所在数组 level + 1
 * @return {Array}
 */
function flat(arr, n) {
    /**
     * @param {Array} array
     * @param {number} level 表示被拍平的数组 array 的层级，最外层是 0
     */
    function flatDeep(array, level) {
        if (level > n - 1) return;

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (Array.isArray(element)) {
                const arrayElement = element;
                flatDeep(item, level + 1);

                array.splice(i, 1, ...arrayElement);
                i += element.length - 1;
            }
        }
    }

    flatDeep(arr, 0);
    return arr;
}
