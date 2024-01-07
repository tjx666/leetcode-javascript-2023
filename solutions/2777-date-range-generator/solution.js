function paddingZero(num) {
    return String(num).padStart(2, '0');
}

/**
 *
 * @param {Date} date
 */
function formatDate(date) {
    return `${date.getFullYear()}-${paddingZero(date.getMonth() + 1)}-${paddingZero(
        date.getDate(),
    )}`;
}

/**
 * @param {string} start
 * @param {string} end
 * @param {number} step
 * @yields {string}
 */
var dateRangeGenerator = function* (start, end, step) {
    const stateDate = Date.parse(start);
    const endDate = Date.parse(end);

    const day = 24 * 60 * 60 * 1000;
    let len = (endDate - stateDate) / day;
    for (let i = 0; i <= len; i += step) {
        yield formatDate(new Date(stateDate + day * i));
    }
};

/**
 * const g = dateRangeGenerator('2023-04-01', '2023-04-04', 1);
 * g.next().value; // '2023-04-01'
 * g.next().value; // '2023-04-02'
 * g.next().value; // '2023-04-03'
 * g.next().value; // '2023-04-04'
 * g.next().done; // true
 */

console.log(formatDate(new Date()));
