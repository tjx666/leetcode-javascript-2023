/**
 * @param {number} n
 * @return {string[]}
 */
export default function generateParenthesis(n) {
    const result = [];
    let path = [];
    let open = 0;
    let close = 0;

    function dfs() {
        if (path.length === 2 * n) {
            result.push(path.join(''));
            return;
        }

        if (open < n) {
            path.push('(');
            open++;
            dfs();
            path.pop();
            open--;
        }

        if (close < open) {
            path.push(')');
            close++;
            dfs();
            path.pop();
            close--;
        }
    }
    dfs();

    return result;
}
