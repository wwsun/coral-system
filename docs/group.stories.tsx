import React from 'react';
import { Box, Group } from 'coral-system';
import styled, { css } from 'styled-components';

export default {
  title: 'components/Group',
  component: Group,
};


export const Basic = (args: any) => (
  <Group>
    <Box as="button">left</Box>
    <Box as="button">center</Box>
    <Box as="button">right</Box>
  </Group>
);

const CustomTag = styled.span`
  display: inline-block;
  background-color: #666;
  color: #FFF;
  border-radius: 2px;
  padding: 0px 8px;
`;


export const TagGroup = (args: any) => (
  <Group display="inline-flex">
    <CustomTag>left</CustomTag>
    <CustomTag>center</CustomTag>
    <CustomTag>right</CustomTag>
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
  padding: 4px;

  > button {
    border: 0;
    outline: none;
  }
`;

export const Custom = (args: any) => (
  <Group bg="red" css={injectStyle}>
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </Group>
);
