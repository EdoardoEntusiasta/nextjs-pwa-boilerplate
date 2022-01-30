import { ReactNode } from 'react';



export interface IBase {
    children?: ReactNode;
    class_name?: string;
    modifiers?: string[];
}

export interface ITracking {
    intcmp?: string;
    event_track?: {
        key?: string;
        value?: string;
    }[];
}

export interface IFile {
    content_type?: string;
    tags?: string[];
    filename?: string;
    url?: string;
    title?: string;
}

export interface ILink {
    url?: string;
    title?: string;
    target?: 'self' | 'blank' | 'parent' | 'top';
}

export interface IGradient {
    gradient?:
        | 'none'
        | 'spectrum'
        | 'wifi'
        | 'skyq'
        | 'triple_play'
        | 'spectrum_shape'
        | 'extra1'
        | 'extra3'
        | 'extra6'
        | 'extra10';
}
