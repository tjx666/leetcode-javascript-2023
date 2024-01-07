/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    const tempKey = Symbol();
    context[tempKey] = this;
    const result = context[tempKey](...args);
    Reflect.deleteProperty(context, tempKey);
    return result;
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
