export interface IBackdrop {
    open: boolean,
    on_click?: (event: React.MouseEvent<HTMLElement>) => void;
    closable?: boolean;
}