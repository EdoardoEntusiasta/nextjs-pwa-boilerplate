import { ReactNode } from 'react';

export interface IBase {
    children?: ReactNode;
    class_name?: string;
    modifiers?: string[];
}

export interface IFile {
    content_type?: string;
    tags?: string[];
    filename?: string;
    url?: string;
    title?: string;
}

export interface IGradient {
    gradient?:
        | 'none'
}
