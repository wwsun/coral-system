import React from 'react';
import { Box } from 'coral-system';
import { css } from 'styled-components';

export default {
  title: 'Box',
  component: Box,
};

/**
 * 必须加 args 参数才能在 docs 中展示 codes，参考 https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
 * @param args 
 * @returns 
 */
export const Basic = (args: any) => (
  <Box as="button" bg="#FF0000" color="#FFFFFF" fontSize="14px" px="12px" py="4px" border="0" borderRadius="99px">
    Button
  </Box>
);

export const ButtonWithToken = (args: any) => (
  <Box as="button" bg="brand" color="white" fontSize="title" px="xl" py="m" border="0" borderRadius="99px">
    Button
  </Box>
);

export const BorderBox = (args: any) => (
  <Box>
    <Box border="solid" borderColor="line.normal" borderWidth={2}>
      border box
    </Box>

    <Box mt="l" border="4px solid #FF0000">
      border box
    </Box>
  </Box>
);

export const As = (args: any) => (
  <Box as="button" borderRadius="m" bg="brand" color="white" px="l">
    hello
  </Box>
);

const injectStyle = css`
  background: red;
  color: white;
  user-select: none;
`;

export const Custom = (args: any) => <Box css={injectStyle}>coral system</Box>;
