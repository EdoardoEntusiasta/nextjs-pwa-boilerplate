import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResponsiveImage from '@atoms/ResponsiveImage';

export default {
    title: 'Atoms/Responsive Image',
    component: ResponsiveImage,
} as ComponentMeta<typeof ResponsiveImage>;

const Template: ComponentStory<typeof ResponsiveImage> = (args) => (
    <>
        <ResponsiveImage {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    dimensions_fit: false,
    lazy: true,
    xs: {
        width: 300,
        height: 300,
        image: {
            title: 'image alternative text',
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt4b69e24a7c3fafe9/616d4709ab14514f7620ec31/1-1.jpg',
        },
    },
    sm: {
        width: 400,
        height: 250,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt6d1c37236fa852f2/616d470a7f64554d7ba43fb0/8-5.jpg',
        },
    },
    md: {
        width: 500,
        height: 400,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blta09b29dc2d96d40a/616d4709b938f14e336d5053/5-4.jpg',
        },
    },
    lg: {
        width: 600,
        height: 450,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt9cbaef04c2ae8a3e/616d470aaebd59598f329212/4-3.jpg',
        },
    },
    xl: {
        width: 1066,
        height: 600,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/bltb695134fca36ecc2/616d470a16c4734f77d10b1f/16-9.jpg',
        },
    },
    xxl: {
        width: 1066,
        height: 600,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blte6564daf8218001d/616d470a6bd2194efdbec17a/16-9-inverted.jpg',
        },
    },
};

export const DimensionsFit = Template.bind({});
DimensionsFit.args = {
    dimensions_fit: true,
    lazy: true,
    xs: {
        width: 300,
        height: 300,
        image: {
            title: 'image alternative text',
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt4b69e24a7c3fafe9/616d4709ab14514f7620ec31/1-1.jpg',
        },
    },
    sm: {
        width: 400,
        height: 250,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt6d1c37236fa852f2/616d470a7f64554d7ba43fb0/8-5.jpg',
        },
    },
    md: {
        width: 500,
        height: 400,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blta09b29dc2d96d40a/616d4709b938f14e336d5053/5-4.jpg',
        },
    },
    lg: {
        width: 600,
        height: 450,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt9cbaef04c2ae8a3e/616d470aaebd59598f329212/4-3.jpg',
        },
    },
    xl: {
        width: 1066,
        height: 600,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/bltb695134fca36ecc2/616d470a16c4734f77d10b1f/16-9.jpg',
        },
    },
    xxl: {
        width: 1066,
        height: 600,
        image: {
            url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blte6564daf8218001d/616d470a6bd2194efdbec17a/16-9-inverted.jpg',
        },
    },
};
