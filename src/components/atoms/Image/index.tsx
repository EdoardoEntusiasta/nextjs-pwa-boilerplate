import { default as NextImage } from 'next/image';
import { IImage } from './interfaces';
import { getModifiers } from '@utils/helpers';
import { StyledImage, FlippedImage } from './styled';

const Image = ({ modifiers, lazy, mirror, alt, width, height, image }: IImage) => {

    const imageFrag = (
        <NextImage
            src={`${image.url}`}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
            {...(lazy
                ? {
                      loading: 'lazy',
                      placeholder: 'blur',
                  }
                : { priority: true })}
        />
    );

    return (
        <StyledImage {...getModifiers(modifiers, { mirror })}>
            {imageFrag}
            {!!mirror && <FlippedImage>{imageFrag}</FlippedImage>}
        </StyledImage>
    );
};

Image.defaultProps = {
    lazy: true,
    image: {},
};

export default Image;
