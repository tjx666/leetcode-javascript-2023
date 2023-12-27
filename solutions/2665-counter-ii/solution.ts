interface ICounter {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
}

export class Counter implements ICounter {
    private count: number;

    constructor(private init: number) {
        this.count = init;
    }

    increment(): number {
        return ++this.count;
    }

    decrement(): number {
        return --this.count;
    }

    reset(): number {
        this.count = this.init;
        return this.init;
    }
}

function createCounter(init: number): ICounter {
    return new Counter(init);
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
