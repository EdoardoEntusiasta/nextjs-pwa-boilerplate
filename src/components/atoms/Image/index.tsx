import { default as NextImage } from 'next/image';
import { useWebPSupport } from '@hooks/index';
import { IImage } from './interfaces';
import { getModifiers, placeholderImages } from '@utils/helpers';
import { StyledImage, FlippedImage } from './styled';

const Image = ({ modifiers, lazy, mirror, alt, width, height, image }: IImage) => {
    const imageFrag = (
        <NextImage
            src={useWebPSupport() ? `${image.url}?format=webp&width=${width}` : `${image.url}?width=${width}`}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
            {...(lazy
                ? {
                      loading: 'lazy',
                      placeholder: 'blur',
                      blurDataURL: useWebPSupport()
                          ? `${image.url}?format=webp&width=${width}`
                          : `${image.url}?width=${width}`,
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
