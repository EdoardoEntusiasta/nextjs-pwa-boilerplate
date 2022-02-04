import { IBase, IFile } from '@utils/GlobalInterfaces';

export interface IImageBreakpoint {
    width: number;
    height: number;
    image: IFile;
}

export interface IResponsiveImage extends IBase {
    dimensions_fit?: boolean;
    lazy?: boolean;
    alt?: string;
    xs: IImageBreakpoint;
    sm?: IImageBreakpoint;
    md?: IImageBreakpoint;
    lg?: IImageBreakpoint;
    xl?: IImageBreakpoint;
    xxl?: IImageBreakpoint;
}
