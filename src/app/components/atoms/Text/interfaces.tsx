import { IGradient } from '@core/helpers/GlobalInterfaces';

export interface IText extends IGradient {
    text?: string;
    strong?: boolean;
    color?: string;
    gradient?: any;
    type?:
        | 'display_large'
        | 'display_regular'
        | 'page_title'
        | 'section_title'
        | 'body_large'
        | 'body_regular'
        | 'body_small'
        | 'body_legal'
        | 'body_fluid';
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    align?: 'left' | 'center' | 'right' | 'justify';
}
