#!/usr/bin/env node
import chalk from "chalk";
import { deletePathOrFile } from "./function/st-rm-rf";

const pathsToDelete = process.argv.slice(2);

(async () => {
  if (pathsToDelete.length == 0) {
    console.log("[*] Nothing to delete.");
  } else {
    console.log(chalk.green("Start deleting paths:"), pathsToDelete);
    for (let pathToDelete of pathsToDelete) {
      deletePathOrFile(pathToDelete);
    }
  }
})();
