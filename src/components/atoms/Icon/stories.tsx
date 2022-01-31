import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from '@atoms/Icon';

export default {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
    <>
        <span style={{ fontSize: '50pt' }}>
            <Icon {...args} />
        </span>
    </>
);

export const Default = Template.bind({});
Default.args = {
    variant: 'sunrise',
    icon: 'weather-thunder',
};
