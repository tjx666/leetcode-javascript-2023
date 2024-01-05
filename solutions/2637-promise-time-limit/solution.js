function timeLimit(fn, t) {
    return async function (...args) {
        let _resolve;

        const promise = fn(...args);
        promise.then(() => {
            _resolve();
        });

        const timeoutPromise = new Promise((resolve, reject) => {
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
