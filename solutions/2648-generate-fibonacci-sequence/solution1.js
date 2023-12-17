/**
 * @return {Generator<number>}
 */
function* fibGenerator() {
    yield 0;
    yield 1;

    let a = 0;
    let b = 1;

    while (true) {
        yield a + b;
        [a, b] = [b, a + b];
    }
}

// const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// console.log(gen.next().value); // 5
// console.log(gen.next().value); // 8
// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 21
