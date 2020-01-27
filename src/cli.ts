#!/usr/bin/env node
import chalk from "chalk";
import { deletePathOrFile } from "./function/st-rm-rf";
import * as loading from 'loading-cli';

const pathsToDelete = process.argv.slice(2);

(async () => {
  if (pathsToDelete.length == 0) {
    console.log("[*] Nothing to delete.");
  } else {
    const length = pathsToDelete.length;
    console.log(chalk.cyan('Deleting paths: ')+'['+pathsToDelete.join(',') +']') ;
     const loader = loading("").start();
    for (let i = 0; i < length; i++) {
      const pathToDelete = pathsToDelete[i];
      loader.text = `Deleting ${i}/${length} ${chalk.cyan(pathToDelete)}`;
      deletePathOrFile(pathToDelete, {printInfo: false, printError: true, printWarning: false});
    }
    loader.stop();
  }
})();
