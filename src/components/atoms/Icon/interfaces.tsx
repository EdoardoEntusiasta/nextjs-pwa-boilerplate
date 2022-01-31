import { IGradient } from '@utils/GlobalInterfaces';

export interface IIcon extends IGradient {
    icon: string;
    gradient?: any;
    on_click?: (event: React.MouseEvent<HTMLElement>) => void;
}
