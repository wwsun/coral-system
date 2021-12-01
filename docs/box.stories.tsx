import React from 'react';
import { Box } from 'coral-system';
import { css } from 'styled-components';

export default {
  title: 'Box',
  component: Box,
};

export const Basic = () => (
  <Box as="button" bg="#FF0000" color="#FFFFFF" fontSize="14px" px="12px" py="4px" border="0" borderRadius="99px">
    Button
  </Box>
);

export const ButtonWithToken = () => (
  <Box as="button" bg="brand" color="white" fontSize="title" px="xl" py="m" border="0" borderRadius="99px">
    Button
  </Box>
);

export const BorderBox = () => (
  <Box>
    <Box border="solid" borderColor="line.normal" borderWidth={2}>
      border box
    </Box>

    <Box mt="l" border="4px solid #FF0000">
      border box
    </Box>
  </Box>
);

export const As = () => (
  <Box as="button" borderRadius="m" bg="brand" color="white" px="l">
    hello
  </Box>
);

const injectStyle = css`
  background: red;
  color: white;
  user-select: none;
`;

export const Custom = () => <Box css={injectStyle}>coral system</Box>;
