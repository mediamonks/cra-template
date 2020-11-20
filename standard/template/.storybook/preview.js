import { themeDecorator } from '../src/helpers/storybook/decorators';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [themeDecorator];
