class EventEmitter {
    #callbackMap = new Map();

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const callbacks = this.#callbackMap.get(eventName) ?? [];
        callbacks.push(callback);
        this.#callbackMap.set(eventName, callbacks);

        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            },
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        return (this.#callbackMap.get(eventName) ?? []).map((cb) => cb(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

const emitter = new EventEmitter();
const { unsubscribe: u0 } = emitter.subscribe('firstEvent', (x) => x + 1);
const { unsubscribe: u1 } = emitter.subscribe('firstEvent', (x) => x + 2);
const { unsubscribe: u2 } = emitter.subscribe('firstEvent', (x) => x + 3);
u1();
u2();
console.log(emitter.emit('firstEvent', [5]));
