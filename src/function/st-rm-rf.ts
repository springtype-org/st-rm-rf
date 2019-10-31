import {platform} from "os"
import chalk from "chalk";
import {existPath} from "./existpath";
import {isDirectory} from "./isdirectory";
import {deletePathOrFile as linux} from "./st-rm-rf-linux"
import {deletePathOrFile as windows} from "./st-rm-rf-windows"
import {IDeletePathOrFile} from "../interface/ideletefileorpath";

export const deletePathOrFile = (deletePath: string, printError: boolean = true): void => {
    try {

        const osDelete: IDeletePathOrFile = platform() === "win32" ? windows : linux;
        const currentPath = process.cwd();
        deletePath = osDelete.resolve(currentPath, deletePath);
        //source path exist
        if (!existPath(deletePath)) {
            console.log(chalk.red("delete path does not exist " + osDelete.relative(currentPath, deletePath)));
            process.exit(1);
        }
        const isFolder = isDirectory(deletePath);

        osDelete.deletePathOrFile(deletePath);

        console.log(chalk.cyan(`Deleted ${isFolder ? 'folder' : 'file'} ${chalk.white(osDelete.relative(currentPath, deletePath))}`))
    } catch (err) {
        if (printError) {
            console.log(chalk.red('error ') + err);
            process.exit(1);
        }
    }
};
