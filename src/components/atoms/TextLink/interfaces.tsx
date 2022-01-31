

export interface ITextLink {
  href: string;
  color?: string;
  underline?: any; // see material ui 
  variant?: any; // see material ui 
  children: JSX.Element | string;
  with_locale?: boolean;
}