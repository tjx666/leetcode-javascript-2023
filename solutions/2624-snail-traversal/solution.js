/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];

    const array2D = Array.from({ length: rowsCount }, () => Array.from({ length: colsCount }));
    let index = 0;
    let down = true;
    for (let j = 0; j < colsCount; j++) {
        let i;
        if (down) {
            for (i = 0; i < rowsCount; i++) {
                array2D[i][j] = this[index];
                index++;
            }
        } else {
            for (i = rowsCount - 1; i >= 0; i--) {
                array2D[i][j] = this[index];
                index++;
            }
        }

        down = !down;
    }
    return array2D;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
