import { expect, test } from 'vitest';
import debounce from '../solutions/2627-debounce/solution1';
import { sleep } from './utils/async';

test('2627-debounce', async () => {
    let start = Date.now();
    function log(input) {
        return [Date.now() - start, input];
    }
    const dlog = debounce(log, 50);

    setTimeout(() => {
        dlog(1);
    }, 50);

    setTimeout(async () => {
        const result = await dlog(2);
        expect(result[0] > 125 && result[0] < 130).toBe(true);
        expect(result[1]).toBe(2);
    }, 75);

    await sleep(200);
}, 300);
