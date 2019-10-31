#!/usr/bin/env node

import {deletePathOrFile} from "./function/st-rm-rf";
import chalk from "chalk";

const pathsToDelete = process.argv.slice(2);

(async () => {
    if (pathsToDelete.length == 0) {
        console.log(chalk.red('Nothing to delete.'));
    } else {
        console.log(chalk.green('Start deleting paths:'), pathsToDelete);
        for (let pathToDelete of pathsToDelete) {
            deletePathOrFile(pathToDelete);
        }
    }
})();


