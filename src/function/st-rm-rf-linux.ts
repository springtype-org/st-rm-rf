import {IDeletePathOrFile} from "../interface/ideletefileorpath";
import {relative, resolve} from "path";
import {execute} from "./execute";

export const deletePathOrFile: IDeletePathOrFile = {
    relative,
    resolve,
    deletePathOrFile: (deletePath: string) => {
        execute(`rm -rf "${deletePath}"`)
    }
};
