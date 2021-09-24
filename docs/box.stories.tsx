import React from 'react';
import { Box } from 'coral-system';

export default {
  title: 'Box',
};

export const Basic = () => (
  <Box display="inline-block" bg="gray.100" color="gray.10" p="l" borderRadius="s">
    Hello World
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
