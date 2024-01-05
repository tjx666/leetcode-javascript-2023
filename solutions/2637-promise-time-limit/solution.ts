type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args): Promise<void> {
        let _resolve: Function;

        const promise = fn(...args);
        promise.then(() => {
            _resolve();
        });

        const timeoutPromise = new Promise<void>((resolve, reject) => {
            const timer = setTimeout(() => {
                _resolve = () => {};
                reject('Time Limit Exceeded');
            }, t);

            _resolve = () => {
                clearTimeout(timer);
                resolve();
            };
        });

        return Promise.race([promise, timeoutPromise]);
    };
}

// const limited = timeLimit(async (n) => {
//     await new Promise((res) => setTimeout(res, 100));
//     return n * n;
// }, 50);
// limited(5).then(console.log).catch(console.log); // "Time Limit Exceeded" at t=100ms
