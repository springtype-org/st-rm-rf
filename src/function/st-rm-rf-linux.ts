import { execSync } from "child_process";
import { relative, resolve } from "path";
import { IDeletePathOrFile } from "../interface/i-delete-path-or-file";

export const deletePathOrFile: IDeletePathOrFile = {
  relative,
  resolve,
  deletePathOrFile: (deletePath: string) => {
    execSync(`rm -rf "${deletePath}"`);
  },
};
