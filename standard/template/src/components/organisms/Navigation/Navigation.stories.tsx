import type { Meta, Story } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { globalStoreDecorator } from '../../../helpers/storybook/decorators';

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [globalStoreDecorator],
} as Meta;

const Template: Story = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
