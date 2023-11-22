import fs from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import childProcess from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(childProcess.exec);

const title = process.argv[2];

const __dirname = dirname(fileURLToPath(import.meta.url));
const project = resolve(__dirname, '..');

const solutionsFolder = resolve(project, `solutions/${title}/`);
const solution1 = resolve(solutionsFolder, `solution1.js`);

const testsFolder = resolve(project, `tests`);
const test = resolve(testsFolder, `${title}.test.js`);
const genTestPromise = fs.writeFile(
    test,
    `import { expect, test } from 'vitest';

test('${title}', () => {

});
`,
    'utf8',
);

const genSolutionPromise = fs
    .mkdir(solutionsFolder, { recursive: true })
    .then(() => fs.writeFile(solution1, '', 'utf8'));
await Promise.all([genSolutionPromise, genTestPromise]);

await exec(`code-insiders "${solution1}" "${test}"`);
