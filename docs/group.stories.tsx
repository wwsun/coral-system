import React from 'react';
import { Box, Group } from 'coral-system';

export default {
  title: 'Group',
  component: Group,
};

export const Basic = () => (
  <Group>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);

export const Attached = () => (
  <Group attached>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);

export const More = () => (
  <Group attached>
    <Box display="inline-block" border="solid" borderColor="#000">
      haha
    </Box>
    <Box display="inline-block" border="solid" borderColor="#000">
      search
    </Box>
  </Group>
);
