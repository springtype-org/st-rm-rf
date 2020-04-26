import { writeFileSync, mkdirSync, existsSync } from "fs";
import { deletePathOrFile } from "./dist/function/st-rm-rf";

try {
    mkdirSync('.test');

    writeFileSync('.test/test.tmp', 'test', {
        encoding: 'utf8'
    });
} catch (e) { /* doesn't care if it already exists or not */ }

deletePathOrFile('.test');

if (existsSync('.test/test.tmp') || existsSync('.test')) {
    console.log('[!!] Test failed. Test directory .test or file .test/test.tmp still exists.');
    process.exit(1);
} else {
    console.log('[OK] Test finished.');
}