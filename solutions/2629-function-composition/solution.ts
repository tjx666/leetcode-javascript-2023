type F = (x: number) => number;

export function compose(functions: F[]): F {
    if (functions.length === 0) return (x) => x;

    return function (x) {
        return functions.reduceRight((acc, func) => func(acc), x);
    };
}

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4));
