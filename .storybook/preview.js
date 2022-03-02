import GlobalStyles from '../src/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

// .storybook/preview.js
export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyles />
    </>
  )
];
