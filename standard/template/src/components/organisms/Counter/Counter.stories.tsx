import type { Meta } from '@storybook/react';

import Counter from './Counter';
import { createTemplate } from '../../../helpers/storybook/stories';
import { globalStoreDecorator } from '../../../helpers/storybook/decorators';

export default {
  title: 'Counter',
  component: Counter,
  decorators: [globalStoreDecorator],
} as Meta;

const Template = createTemplate(Counter);

export const Default = Template.bind({});
Default.args = {};
