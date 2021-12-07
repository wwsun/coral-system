import React from 'react';
import { Box, Group } from 'coral-system';
import { css } from 'styled-components';

export default {
  title: 'Group',
  component: Group,
};

export const Basic = (args: any) => (
  <Group>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);

export const Attached = (args: any) => (
  <Group attached>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);

export const More = (args: any) => (
  <Group attached>
    <Box display="inline-block" border="solid" borderColor="#000">
      haha
    </Box>
    <Box display="inline-block" border="solid" borderColor="#000">
      search
    </Box>
  </Group>
);

const injectStyle = css`
  background-color: red;
`;

export const Custom = (args: any) => (
  <Group css={injectStyle}>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);
