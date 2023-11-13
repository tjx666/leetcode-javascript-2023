/**
 * @return {Object}
 */
export default function createInfiniteObject() {
    const obj = {};
    return new Proxy(obj, {
        get(_, property) {
            return () => property;
        },
    });
}

// const obj = createInfiniteObject();
// console.log(obj['abc123']()); // "abc123"
