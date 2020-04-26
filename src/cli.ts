#!/usr/bin/env node
const chalk = require("chalk");
import {deletePathOrFile} from "./function/st-rm-rf";

const pathsToDelete = process.argv.slice(2);

(async () => {
    if (pathsToDelete.length == 0) {
        console.log("[*] Nothing to delete.");
    } else {
        const length = pathsToDelete.length;
        console.log(chalk.cyan(`Deleting ${length==1?'path':'paths'}: [${pathsToDelete.map(v => chalk.white(v)).join(',')}]`));
        for (let i = 0; i < length; i++) {
            const pathToDelete = pathsToDelete[i];
            deletePathOrFile(pathToDelete, {printInfo: false, printError: true, printWarning: false});
        }
    }
})();
