function spiralOrder(matrix: number[][]): number[] {
    const result = [];

    const m = matrix.length;
    const n = matrix[0].length;

    let l = 0;
    let r = n - 1;

    let t = 0;
    let b = m - 1;

    while (true) {
        for (let i = l; i <= r; i++) {
            result.push(matrix[t][i]);
        }
        if (++t > b) break;

        for (let i = t; i <= b; i++) {
            result.push(matrix[i][r]);
        }
        if (--r < l) break;

        for (let i = r; i >= l; i--) {
            result.push(matrix[b][i]);
        }
        if (--b < t) break;

        for (let i = b; i >= t; i--) {
            result.push(matrix[i][l]);
        }
        if (++l > r) break;
    }

    return result;
}
