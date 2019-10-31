import {IDeletePathOrFile} from "../interface/ideletefileorpath";
import {win32} from 'path';
import {execute} from "./execute";
import {isDirectory} from "./isdirectory";

const resolve = win32.resolve;
const relative = win32.relative;

export const deletePathOrFile: IDeletePathOrFile = {
    relative,
    resolve,
    deletePathOrFile: (deletePath: string) => {
        if (isDirectory(deletePath)) {
            execute(`${process.env.comspec} /c rmdir /s /q "${deletePath}`);
        } else {
            execute(`${process.env.comspec} /c del "${deletePath}"`);
        }
    }
};
