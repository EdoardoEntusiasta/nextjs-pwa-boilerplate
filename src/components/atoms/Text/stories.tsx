import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from '@atoms/Text';

export default {
    title: 'atoms/Text',
    component: Text,
    argTypes: {
        tag: {
            control: {
                type: 'select',
            },
        },
        type: {
            control: {
                type: 'select',
                labels: {
                    display_large: 'Display Large',
                    display_regular: 'Display Regular',
                    page_title: 'Page Title',
                    section_title: 'Section Title',
                    body_large: 'Body Large',
                    body_regular: 'Body Regular',
                    body_small: 'Body Small',
                    body_legal: 'Body Legal',
                },
            },
        },
        gradient: {
            control: {
                type: 'select',
            },
        },
        align: {
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <>
        <Text {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    tag: 'p',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Veniam eos ex nihil.</strong>',
    type: 'body_large',
    strong: false,
};

export const Title = Template.bind({});
Title.args = {
    tag: 'h1',
    type: 'display_large',
    gradient: 'spectrum',
    strong: true,
    align: 'center',
    text: 'Text test title',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum repudiandae perspiciatis, ab totam voluptatibus consequuntur fuga distinctio voluptate debitis provident laudantium aperiam odit ipsa quibusdam, perferendis a. Repudiandae reprehenderit adipisci sint aut autem consequatur. Ex veniam neque totam fugiat.',
};
