import { IBase, IFile } from "@utils/GlobalInterfaces";

export interface IImage extends IBase {
    lazy?: boolean;
    mirror?: boolean;
    alt?: string;
    width: number;
    height: number;
    image: IFile;
}
