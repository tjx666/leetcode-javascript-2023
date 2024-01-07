/**
 * @param {Array<Function>} functions
 * @return {Promise<Array>}
 */
var promiseAllSettled = function (functions) {
    const result = Array.from({ length: functions.length });
    let finishedCount = 0;
    return new Promise((resolve) => {
        for (const [index, fn] of functions.entries()) {
            fn()
                .then(
                    (value) => {
                        result[index] = {
                            status: 'fulfilled',
                            value,
                        };
                    },
                    (reason) => {
                        result[index] = {
                            status: 'rejected',
                            reason,
                        };
                    },
                )
                .finally(() => {
                    finishedCount++;
                    if (finishedCount === functions.length) {
                        resolve(result);
                    }
                });
        }
    });
};

/**
 * const functions = [
 *    () => new Promise(resolve => setTimeout(() => resolve(15), 100))
 * ]
 * const time = performance.now()
 *
 * const promise = promiseAllSettled(functions);
 *
 * promise.then(res => {
 *     const out = {t: Math.floor(performance.now() - time), values: res}
 *     console.log(out) // {"t":100,"values":[{"status":"fulfilled","value":15}]}
 * })
 */
