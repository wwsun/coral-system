import { SystemProvider } from 'coral-system';

const withSystemProvider = (Story, context) => {

  return (<SystemProvider>
    <Story {...context} />
  </SystemProvider>)
};

export const decorators = [withSystemProvider];
