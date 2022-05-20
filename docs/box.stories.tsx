import React from 'react';
import { Box, Button, Link, css } from 'coral-system';

export default {
  title: 'components/Box',
  component: Box,
};

export const Basic = (args: any) => (
  <Box
    as="button"
    bg="#FF0000"
    color="#FFFFFF"
    fontSize="14px"
    px="12px"
    py="4px"
    border="0"
    borderRadius="99px"
    {...args}
  >
    Button
  </Box>
);

export const ButtonWithToken = (args: any) => (
  <Box
    as="button"
    bg="brand"
    color="white"
    fontSize="title"
    px="xl"
    py="m"
    border="0"
    borderRadius="99px"
    {...args}
  >
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
  <Button
    borderRadius="m"
    bg="brand"
    color="white"
    px="l"
    lineHeight={3}
    onClick={(e) => {
      console.log(e);
    }}
  >
    Simple Button
  </Button>
);

const injectStyle = css`
  background: red;
  color: white;
  user-select: none;
`;

export const Custom = (args: any) => <Box css={injectStyle}>coral system</Box>;
