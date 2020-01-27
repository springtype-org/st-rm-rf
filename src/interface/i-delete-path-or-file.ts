export interface IDeletePathOrFile {
    resolve: (...pathSegments: string[]) => string;
    relative: (from: string, to: string) => string
    deletePathOrFile: (deletePath: string) => void;
}