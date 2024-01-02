// /**
//  * @param {number} millis
//  * @return {Promise}
//  */
// async function sleep(millis) {
//     const { promise, resolve } = Promise.withResolvers();
//     setTimeout(() => resolve(), millis);
//     return promise;
// }

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), millis);
    });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
