import React from 'react';
import { Box, Group } from 'coral-system';

export default {
  title: 'Basic',
};

export const BasicBox = () => (
  <Box display="inline-block" bg="gray.100" color="gray.10" p="l" borderRadius="m">
    Hello World
  </Box>
);

export const BorderBox = () => (
  <Box>
    <Box border="solid" borderColor="line.border" borderWidth={2}>
      border box
    </Box>

    <Box mt="l" border="4px solid #FF0000">
      border box
    </Box>
  </Box>
);

export const BoxSimple = () => (
  <Box bg="brand.normal" p="m" color="emphasis.0" border="solid" borderColor="line.border" borderRadius="m">
    This is a simple box.
  </Box>
);

export const BoxAs = () => (
  <Box as="button" borderRadius="m" bg="brand.normal" color="white">
    hello
  </Box>
);

export const GroupBasic = () => (
  <Group>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);

export const GroupAttached = () => (
  <Group attached>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);

export const GroupMore = () => (
  <Group attached>
    <Box display="inline-block" border="solid" borderColor="#000">haha</Box>
    <Box display="inline-block" border="solid" borderColor="#000">search</Box>
  </Group>
);
