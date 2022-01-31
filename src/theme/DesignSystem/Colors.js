import { rgba, linearGradient } from 'polished';
import { css } from 'styled-components';

export const primary = {
    base: '#000FF5',
    light: '#00A0FF',
    dark: '#000FBE',
    glass: '#091153',
};

export const defaultColorIcon = '#2f2f2f';

export const gray = {
    black: '#000000',
    shade1: '#333333',
    shade2: '#4D4D4D',
    shade3: '#909090',
    shade4: '#999999',
    shade5: '#CCCCCC',
    shade6: '#E6E6E6',
    shade7: '#F2F2F2',
    shade8: '#FAFAFA',
    white: '#FFFFFF',
};

export const feedback = {
    positive: '#2FA841',
    positiveDark: '#046714',
    alert: '#F15A22',
    alertDark: '#B72500',
    negative: '#FF2744',
    negativeDark: '#C4001D',
};

export const shadows = {
    sm: `0 8px 24px 0 ${rgba(gray.black, 0.07)}`,
    md: `0 12px 17px 0 ${rgba(gray.black, 0.14)}`,
    lg: `0 9px 46px 0 ${rgba(gray.black, 0.12)}, 0 11px 15px 0 ${rgba(gray.black, 0.2)}`,
    negative: `box-shadow: 0 -8px 20px 0 ${rgba(gray.black, 0.08)}`,
};

export const gradients = {
    black: ['black 1%', 'transparent 99%'],
    white: ['white 1%', 'transparent 99%'],
    spectrum: ['#FF9E00 10%', '#FF0000 35%', '#85007D 60%', '#21429C 85%', '#0071FF 100%'],
    spectrum_shape: ['#FF9E00 0%', '#FF0000 35%', '#85007D 60%', '#21429C 85%', '#0071FF 100%'],
    wifi: ['#6E00FF 10%', '#FF00A5 90%'],
    triple_play: ['#FFD500 0%', '#FF0400 20%', '#B91ABE 48%', '#B91ABE 75%', '#1400FF 100%'],
    skyq: ['#000FF5 10%', '#00D2FF 90%'],
    extra1: ['#EF8300 0%', '#FBBF00 100%'],
    extra3: ['#E20512 0%', '#DF520B 100%'],
    extra6: ['#A62979 0%', '#E7418F 100%'],
    extra10: ['#0B4495 0%', '#007CBF 100%'],
};

export const gradient = (inputGradient, rotation = 90) => {
    if (typeof gradient == 'string' && typeof rotation == 'number') {
        return `${rotation}deg, ${gradients[inputGradient]}`;
    } else {
        console.error(`${inputGradient} gradient has wrong entries!`);
    }
};

export const borderGradient = (
    inputGradient,
    direction = "to right",
    borderWidth
) => {
    return css`
        border: double transparent ${borderWidth}px;
        background-image: linear-gradient(white, white),
            linear-gradient(
                ${direction},
                ${gradients[inputGradient].toString()}
            );
        background-origin: border-box;
        background-clip: content-box, border-box;
    `;
};

// set background gradient and its rotation
export const backgroundGradient = (inputGradient, direction = 'to right') => {
    return css`
        ${linearGradient({
            colorStops: gradients[inputGradient],
            toDirection: direction,
        })};
    `;
};

// set text graident and its rotation
export const textGradient = (inputGradient, direction = 'to right') => {
    return css`
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0px 0px transparent;
        //display: inline-block;
        ${backgroundGradient(inputGradient, direction)}
        &::before {
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            ${backgroundGradient(inputGradient, direction)}
        }
    `;
};
