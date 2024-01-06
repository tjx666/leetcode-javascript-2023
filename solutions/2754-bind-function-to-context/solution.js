/**
 * @param {Object} thisObj
 * @return {Function}
 */
Function.prototype.bindPolyfill = function (thisObj, ...boundArgs) {
    const { name } = this;
    const boundFnName = `Bound ${name}`;
    const fn = this;
    const obj = {
        [boundFnName](...args) {
            return fn.apply(new.target ? this : thisObj, [...boundArgs, ...args]);
        },
    };
    const boundFn = obj[boundFnName];
    Object.defineProperty(boundFn, 'length', {
        get() {
            return fn.length;
        },
    });
    boundFn.prototype = Object.create(fn.prototype);
    boundFn.prototype.constructor = boundFn;
    Reflect.setPrototypeOf(boundFn, fn);
    return boundFn;
};
