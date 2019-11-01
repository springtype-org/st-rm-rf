import { execSync } from "child_process";
import { relative, resolve } from "path";
import { IDeletePathOrFile } from "../interface/idelete-path-or-file";

export const deletePathOrFile: IDeletePathOrFile = {
  relative,
  resolve,
  deletePathOrFile: (deletePath: string) => {
    execSync(`rm -rf "${deletePath}"`);
  },
};
