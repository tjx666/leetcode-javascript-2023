/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
async function promisePool(functions, n) {
    return new Promise((resolve, reject) => {
        const result = [];
        let index = 0;
        let finished = false;
        function run() {
            const task = functions.shift();
            task().then(
                (value) => {
                    if (finished) return;

                    result[index] = value;

                    if (functions.length !== 0) {
                        run();
                    } else {
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

        for (let i = 0, len = Math.min(functions.length, n); i < len; i++) {
            run();
        }
    });
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

const start = Date.now();
const sleep = (t) => {
    return () => {
        return new Promise((res) =>
            setTimeout(() => {
                console.log(Date.now() - start);
                res();
            }, t),
        );
    };
};
promisePool([sleep(300), sleep(400), sleep(200)], 5);
