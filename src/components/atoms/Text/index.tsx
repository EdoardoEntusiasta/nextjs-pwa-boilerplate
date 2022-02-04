/** 
 * For this component I have to thank two smart guys 
 * Jacopo Panzera https://github.com/Sliver02
 * and 
 * Andrea Caccia 
 */

import { TextWrapper, StyledText } from './styled';
import { IText } from './interfaces';

const Text = ({ tag, strong, type, gradient, color, align, text }: IText) => {

    const isString = typeof text === 'string';

    const textBody = (
        <StyledText
            as={tag === 'p' ? 'p' : tag}
            color={color}
            strong={strong}
            type={type}
            dangerouslySetInnerHTML={ isString ? { __html: text } : null}
        >
            { ! isString ? 
                <>{ text }</>
                : null
            }
        </StyledText>
    );

    return (
        <>{!!tag && tag !== 'p' ? <TextWrapper align={align}>{textBody}</TextWrapper> : textBody}</>
    );
};

Text.defaultProps = {
    tag: 'p',
    type: 'body_regular',
};

export default Text;
