/**
 * 思路：
 * 需要考虑 instanceof 某些情况报错，例如右边操作符不是可调用的
 * 其实我觉得 1 就不是 Number 的实例，基本类型和包装类型就是两种类型
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
export default function checkIfInstanceOf(obj, classFunction) {
    if (
        obj === undefined ||
        obj === null ||
        classFunction === undefined ||
        classFunction === null ||
        // not callable
        !(classFunction instanceof Function)
    ) {
        return false;
    }

    //  基本类型
    if (typeof obj !== 'object') {
        return Object(obj) instanceof classFunction;
    }

    return obj instanceof classFunction;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
