import { SystemProvider } from 'coral-system';

const withSystemProvider = (Story, context) => {

  return (<SystemProvider prefix="--tango">
    <Story {...context} />
  </SystemProvider>)
};

export const decorators = [withSystemProvider];
