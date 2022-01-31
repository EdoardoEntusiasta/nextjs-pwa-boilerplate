import { ComponentMeta, ComponentStory } from '@storybook/react';
import Backdrop from '@atoms/Backdrop';

export default {
    title: 'Atoms/Backdrop',
    component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    closable: false,
};

export const ClosableOnClick = Template.bind({});
ClosableOnClick.args = {
    open: true,
    closable: true,
};

