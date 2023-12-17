class TimeLimitedCache {
    /** @type {Map<number, {value: number, expires: number}>} */
    #cache = new Map();

    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const ret = Boolean(this.#cache.has(key) && Date.now() < this.#cache.get(key).expires);
        this.#cache.set(key, {
            value,
            expires: Date.now() + duration,
        });
        return ret;
    }

    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        if (this.#cache.has(key)) {
            const existed = this.#cache.get(key);
            return Date.now() >= existed.expires ? -1 : existed.value;
        }
        return -1;
    }

    /**
     * @return {number} count of non-expired keys
     */
    count() {
        const now = Date.now();
        return [...this.#cache.values()].reduce(
            (acc, current) => acc + (now < current.expires ? 1 : 0),
            0,
        );
    }
}

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
