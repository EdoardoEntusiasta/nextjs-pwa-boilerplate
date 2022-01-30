import { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from '@atoms/Image';

export default {
    title: 'Atoms/Image',
    component: Image,
    argTypes: {
        modifiers: {
            options: ['rounded_corners'],
            control: {
                type: 'inline-check',
                labels: {
                    vertical_image: 'Rounded Corners',
                },
            },
        },
    },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
    <>
        <Image alt={''} {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    lazy: true,
    height: 1000,
    width: 1000,
    image: {
        title: 'Alternative image text',
        url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt4b69e24a7c3fafe9/616d4709ab14514f7620ec31/1-1.jpg',
    },
};

export const Mirror = Template.bind({});
Mirror.args = {
    lazy: true,
    mirror: true,
    height: 1000,
    width: 1000,
    image: {
        title: 'Alternative image text',
        url: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt4b69e24a7c3fafe9/616d4709ab14514f7620ec31/1-1.jpg',
    },
};
