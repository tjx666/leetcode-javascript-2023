/**
 * @param {number} ms
 * @returns {void}
 */
export async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
