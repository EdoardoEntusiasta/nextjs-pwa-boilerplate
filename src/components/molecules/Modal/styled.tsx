import styled, { css } from 'styled-components';
import { zIndex } from '@theme/Variables';
import { gray, primary } from '@theme/Colors';
import media from '@theme/MediaQueries';
import Icon from '@atoms/Icon/styled';
import { remCalc } from '@utils/helpers';

export const Dialog = styled.div``;
export const ContentWrapper = styled.div``;
export const Content = styled.div``;
export const Footer = styled.div``;

// modifiers

const noPadding = css`
    ${ContentWrapper} {
        padding: 0;
        ::before {
            display: none;
        }
        ${Content} {
            padding: 0;
        }
    }
`;

const noPaddingBottom = css`
    ${ContentWrapper} {
        padding-bottom: 0;
        ${Content} {
            padding-bottom: 0;
        }
    }
`;

const hasFooter = css`
    max-height: ${remCalc(520)};
    ${media.min.md`
            max-height: ${remCalc(540)};
        `}
    ${Content} {
        padding: 2rem 1rem ${remCalc(40)};
    }
`;

const hasNoFooter = css`
    max-height: ${remCalc(664)};
    ${Content} {
        padding: 2rem 1rem;
    }
`;

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: auto;

    ${Dialog} {
        background: ${gray.white};
        z-index: ${zIndex.modal};
        margin: auto;
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        ${media.min.md`
            max-width: ${remCalc(800)};
            width: auto;
            height: auto;
            border-radius: 4px;
        `}
        
        ${Icon.StyledIcon} {
            position: absolute;
            z-index: ${zIndex.up};
            top: 1rem;
            right: 1rem;
            background: ${gray.shade7};
            color: ${primary.base};
            cursor: pointer;
            width: ${remCalc(44)};;
            height: ${remCalc(44)};
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${remCalc(28)};
        }

        ${ContentWrapper} {
            overflow: auto;
            ${(props) => (!!props.footer ? hasFooter : hasNoFooter)};
            ::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: ${remCalc(16)};
                height: ${remCalc(80)};
                background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 1) 0%,
                    rgba(255, 255, 255, 0) 100%
                );
            }
            ${Content} {
                ${media.min.md`
                    padding-left: ${remCalc(20)};
                    padding-right: ${remCalc(20)};
                `}
            }
        }

        ${Footer} {
            padding: 1rem;
            height: ${remCalc(144)};
            background: ${gray.shade7};
            display: flex;
            position: relative;
            align-content: center;
            ${media.min.md`
                padding: ${remCalc(14)} ${remCalc(100)};
                height: ${remCalc(124)};
            `}
            ::before {
                content: '';
                position: absolute;
                top: ${remCalc(-30)};
                height: ${remCalc(-30)};
                left: 0;
                right: 0;
                pointer-events: none;
                background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
            }
        }

        ${(props) => props.no_padding && noPadding};
        ${(props) => props.no_padding_bottom && noPaddingBottom};
    }
`;
