import {lstatSync, PathLike} from "fs";
import {existPath} from "./existpath";

export const isDirectory = (path: PathLike) => {
    return existPath(path) && lstatSync(path).isDirectory();
};