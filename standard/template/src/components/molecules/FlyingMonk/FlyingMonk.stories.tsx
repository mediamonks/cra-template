import type { Meta } from '@storybook/react';

import FlyingMonk from './FlyingMonk';
import { createTemplate } from '../../../helpers/storybook/stories';

export default {
  title: 'FlyingMonk',
  component: FlyingMonk,
} as Meta;

const Template = createTemplate(FlyingMonk);

export const Default = Template.bind({});
Default.args = {};
