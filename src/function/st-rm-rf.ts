import chalk from "chalk";
import { existsSync } from "fs";
import { platform } from "os";
import { IDeletePathOrFile } from "../interface/idelete-path-or-file";
import { isDirectory } from "./is-directory";
import { deletePathOrFile as linux } from "./st-rm-rf-linux";
import { deletePathOrFile as windows } from "./st-rm-rf-windows";

export const deletePathOrFile = (deletePath: string, printError: boolean = true): void => {
  try {
    const osDelete: IDeletePathOrFile = platform() === "win32" ? windows : linux;
    const currentPath = process.cwd();
    deletePath = osDelete.resolve(currentPath, deletePath);
    if (!existsSync(deletePath)) {
      console.log(chalk.red(`[!] Path does not exist: ${osDelete.relative(currentPath, deletePath)}`));
      throw new Error('Path does not exist');
    }
    const isFolder = isDirectory(deletePath);

    console.log(chalk.cyan(`[*] Deleting ${isFolder ? "folder" : "file"} ${chalk.white(osDelete.relative(currentPath, deletePath))}...`));
    osDelete.deletePathOrFile(deletePath);
  } catch (err) {
    if (printError) {
      console.log(chalk.red("[!] Error: ") + err);
      throw err;
    }
  }
};
