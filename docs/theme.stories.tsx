import React from 'react';
import { Box, extendTheme, SystemProvider } from 'coral-system';

export default {
  title: 'ThemeProvider',
  component: SystemProvider,
};

const newTheme = extendTheme({
  colors: {
    custom: {
      bg: '#333',
      color: '#fff',
    },
  },
});

export const Basic = (args: any) => {
  // 自定义颜色必须使用完整的路径
  return (
    <SystemProvider theme={newTheme}>
      <Box bg="colors.custom.bg" color="colors.custom.color">
        hello world
      </Box>
    </SystemProvider>
  );
};
