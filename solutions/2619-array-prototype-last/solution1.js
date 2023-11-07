/**
 * 思路：下标访问或者直接用 api Array.prototype.at
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    return this.length === 0 ? -1 : this.at(-1);
    // return this.length === 0 ? -1 : this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
