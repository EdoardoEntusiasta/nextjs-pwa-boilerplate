/** 
 * For this component I have to thank two smart guys 
 * Jacopo Panzera https://github.com/Sliver02
 * and 
 * Andrea Caccia 
 */

import { StyledIcon } from './styled';
import { IIcon } from './interfaces';

/**
 * Icons package
 * https://icons.lightvue.org/icons
 */
import "light-icons/dist/light-icon.css";


const Icon = ({ icon, gradient, on_click }: IIcon) => {
    return (
        <StyledIcon
            className={icon}
            gradient={gradient}
            onClick={on_click}
        />
    );
};

Icon.defaultProps = {
    variant: 'sunrise',
};

export default Icon;
