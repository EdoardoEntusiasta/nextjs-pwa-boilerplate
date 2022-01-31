import { IBase, IFile } from "@utils/GlobalInterfaces";

export default interface IButton {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string | JSX.Element;
  variant?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}