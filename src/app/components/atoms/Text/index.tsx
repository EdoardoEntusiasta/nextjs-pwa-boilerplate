import { TextWrapper, StyledText } from './styled';
import { IText } from './interfaces';
import { parsedText } from '@coreHelpers/Utils';

const Text = ({ tag, strong, type, gradient, color, align, text }: IText) => {

    const textBody = (
        <StyledText
            as={tag === 'p' ? 'p' : tag}
            color={color}
            strong={strong}
            type={type}
            dangerouslySetInnerHTML={{ __html: parsedText(text ? text : '') }}
        />
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
