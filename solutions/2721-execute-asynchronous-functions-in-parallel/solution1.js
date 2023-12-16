/**
 * @param {Array<() => Promise<any>>} functions
 * @return {Promise<any>}
 */
function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const result = Array.from({ length: functions.length });
        let finished = false;
        let resolvedCount = 0;
        for (const [index, func] of functions.entries()) {
            func().then(
                (value) => {
                    if (finished) return;

                    result[index] = value;
                    resolvedCount++;
                    if (resolvedCount === functions.length) {
                        finished = true;
                        resolve(result);
                    }
                },
                (reason) => {
                    if (finished) return;

                    finished = true;
                    reject(reason);
                },
            );
        }
    });
}

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
