import React from 'react';
import { Box, Group } from 'coral-system';
import { css } from 'styled-components';

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

const injectStyle = css`
  background-color: red;
`;

export const Custom = () => (
  <Group css={injectStyle}>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);
