import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    //Configuración de controles
    argTypes: {
        color: { control: 'select', options: ['primary','secondary','tertiary']},
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false   //Capitaliza todo
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: "normal",
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'  // primary|secondary|tertiary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}


export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
}