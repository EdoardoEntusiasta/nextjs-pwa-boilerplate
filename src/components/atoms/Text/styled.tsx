import styled, { css } from 'styled-components';
import { fontTypes, unit } from '@theme/Variables';
import media from '@theme/MediaQueries';
import { remCalc } from '@utils/helpers';



const getType = (curretType: any) => {
    switch (curretType) {
        default:
            return bodyRegular;
        case 'display_large':
            return displayLarge;
        case 'display_regular':
            return displayRegular;
        case 'page_title':
            return pageTitle;
        case 'section_title':
            return sectionTitle;
        case 'body_large':
            return bodyLarge;
        case 'body_regular':
            return bodyRegular;
        case 'body_small':
            return bodySmall;
        case 'body_legal':
            return bodyLegal;
        case 'body_fluid':
            return bodyFluid;
    }
};

//type
const displayLarge = css`
    font-size: ${remCalc(fontTypes.sm.displayLarge)};

    ${media.min.md`
        font-size: ${remCalc(fontTypes.md.displayLarge)};
    `}

    ${media.min.lg`
        font-size: ${remCalc(fontTypes.lg.displayLarge)};
    `}
`;
const displayRegular = css`
    font-size: ${remCalc(fontTypes.sm.displayRegular)};
    ${media.min.md`
        font-size: ${remCalc(fontTypes.md.displayRegular)};
    `}

    ${media.min.lg`
        font-size: ${remCalc(fontTypes.lg.displayRegular)};
    `}
`;
const pageTitle = css`
    font-size: ${remCalc(fontTypes.sm.page)};

    ${media.min.md`
        font-size: ${remCalc(fontTypes.md.page)};
    `}

    ${media.min.lg`
        font-size: ${remCalc(fontTypes.lg.page)};
    `}
`;
const sectionTitle = css`
    font-size: ${remCalc(fontTypes.sm.section)};

    ${media.min.md`
        font-size: ${remCalc(fontTypes.md.section)};
    `}

    ${media.min.lg`
        font-size: ${remCalc(fontTypes.lg.section)};
    `}
`;
const bodyLarge = css`
    font-size: ${remCalc(fontTypes.sm.bodyLarge)};

    ${media.min.md`
        font-size: ${remCalc(fontTypes.md.bodyLarge)};
    `}

    ${media.min.lg`
        font-size: ${remCalc(fontTypes.lg.bodyLarge)};
    `}
`;
const bodyRegular = css`
    font-size: ${remCalc(fontTypes.sm.bodyRegular)};
`;
const bodySmall = css`
    font-size: ${remCalc(fontTypes.sm.bodySmall)};
`;
const bodyLegal = css`
    font-size: ${remCalc(fontTypes.sm.legal)};
`;
const bodyFluid = css`
    font-size: ${remCalc(fontTypes.sm.bodyFluid)};

    ${media.min.md`
        font-size: ${remCalc(fontTypes.md.bodyFluid)};
    `}

    ${media.min.lg`
        font-size: ${remCalc(fontTypes.lg.bodyFluid)};
    `}
`;

// tags
const paragraph = css`
    text-align: ${(props: any) => (!!props.align ? props.align : 'left')};

    + p {
        margin-top: ${unit}px;
    }
`;
const title = css`
    display: inline-block;
`;

// modifiers

export const TextWrapper = styled.div`
    text-align: ${(props: any) => (!!props.align ? props.align : 'left')};

    & + & {
        margin-top: ${unit * 3}px;
    }
    + p {
        margin-top: ${unit * 2}px;
    }
`;

export const StyledText = styled.p`
    font-weight: ${(props: any) => (!!props.strong ? 500 : 400)};

    ${(props: any) => !!props.color && `color: ${props.color};`}
    ${(props: any) => (!!props.tag && props.tag !== 'p' ? title : paragraph)}
    ${(props: any) => !!props.type && getType(props.type)}

`;

const textStyles = {
    StyledText,
    TextWrapper,
};

export default textStyles;