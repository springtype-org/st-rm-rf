const chalk = require("chalk");
import {existsSync} from "fs";
import {platform} from "os";
import {IDeletePathOrFile} from "../interface/i-delete-path-or-file";
import {isDirectory} from "./is-directory";
import {deletePathOrFile as linux} from "./st-rm-rf-linux";
import {deletePathOrFile as windows} from "./st-rm-rf-windows";
import {IDeletePathOrFileOption} from "../interface/i-delete-path-or-file-option";

const DEFAULT_DELETE_PATH_PATH_OR_FILE_OPTION: IDeletePathOrFileOption = {
    printInfo: true,
    printWarning: true,
    printError: true,
};
export const deletePathOrFile = (deletePath: string, option: IDeletePathOrFileOption = DEFAULT_DELETE_PATH_PATH_OR_FILE_OPTION): void => {
    try {
        const osDelete: IDeletePathOrFile = platform() === "win32" ? windows : linux;
        const currentPath = process.cwd();
        deletePath = osDelete.resolve(currentPath, deletePath);
        if (!existsSync(deletePath)) {
            if (option.printWarning) {
                console.log(chalk.yellow(`[!] Warning: Path does not exist: ${osDelete.relative(currentPath, deletePath)}`));
            }
            return;
        }
        const isFolder = isDirectory(deletePath);
        if (option.printInfo) {
            console.log(chalk.cyan(`[*] Deleting ${isFolder ? "folder" : "file"} ${chalk.white(osDelete.relative(currentPath, deletePath))}...`));
        }
        osDelete.deletePathOrFile(deletePath);
    } catch (err) {
        if (option.printError) {
            console.log(chalk.yellow("[!] Warning: ") + err);
        }
    }
};
