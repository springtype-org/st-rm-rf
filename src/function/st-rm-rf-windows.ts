import { execSync } from "child_process";
import { win32 } from "path";
import { IDeletePathOrFile } from "../interface/i-delete-path-or-file";
import { isDirectory } from "./is-directory";

const resolve = win32.resolve;
const relative = win32.relative;

export const deletePathOrFile: IDeletePathOrFile = {
  relative,
  resolve,
  deletePathOrFile: (deletePath: string) => {
    if (isDirectory(deletePath)) {
      execSync(`${process.env.comspec} /c rmdir /s /q "${deletePath}`);
    } else {
      execSync(`${process.env.comspec} /c del "${deletePath}"`);
    }
  },
};
