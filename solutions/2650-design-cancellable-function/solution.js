/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
    let cancel = () => {};
    const p = new Promise((resolve, reject) => {
        cancel = (msg = 'Cancelled') => {
            run(msg, 'throw');
        };
        const run = (ret, fnName = 'next') => {
            try {
                const { value, done } = generator[fnName](ret);
                if (done) {
                    resolve(value);
                    return;
                }
                value
                    .then((val) => {
                        run(val);
                    })
                    .catch((err) => {
                        run(err, 'throw');
                    });
            } catch (errorByGenerator) {
                reject(errorByGenerator);
            }
        };
        run(null);
    });
    return [cancel, p];
};
