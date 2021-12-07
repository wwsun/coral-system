import React from 'react';
import styled from 'styled-components';
import { FlexItem, Flex, Box } from 'coral-system';

export default {
  title: 'Flex',
  component: Flex,
  subcomponents: { FlexItem },
};

export const Basic = (args: any) => (
  <Flex spacing="l" direction="row">
    <Box width="40px" height="40px" bg="brand" color="white">
      1
    </Box>
    <Box width="40px" height="40px" bg="brand" color="white">
      2
    </Box>
    <Box width="40px" height="40px" bg="brand" color="white">
      3
    </Box>
  </Flex>
);

export const VerticalStack = (args: any) => (
  <Flex spacing="l" direction="column">
    <Box width="40px" height="40px" bg="brand" color="white">
      1
    </Box>
    <Box width="40px" height="40px" bg="brand" color="white">
      2
    </Box>
    <Box width="40px" height="40px" bg="brand" color="white">
      3
    </Box>
  </Flex>
);

const Example = styled.div`
  .flex-item {
    padding: 12px 0;
    background-color: #ddd;
    border: 1px solid #ccc;
    text-align: center;
  }
`;

export const EqualCols = (args: any) => (
  <Example>
    <Flex>
      <FlexItem className="flex-item">1/3</FlexItem>
      <FlexItem className="flex-item">1/3</FlexItem>
      <FlexItem className="flex-item">1/3</FlexItem>
    </Flex>
  </Example>
);

export const ColSpan = (args: any) => (
  <Example>
    <Flex>
      <FlexItem span={1} className="flex-item">1/12</FlexItem>
      <FlexItem span={2} className="flex-item">1/6</FlexItem>
      <FlexItem span={3} className="flex-item">1/4</FlexItem>
      <FlexItem span={6} className="flex-item">1/2</FlexItem>
    </Flex>
  </Example>
);

export const AutoCol = (args: any) => (
  <Example>
    <Flex>
      <FlexItem className="flex-item">item</FlexItem>
      <FlexItem span="auto" className="flex-item">动态宽度的内容</FlexItem>
      <FlexItem className="flex-item">item</FlexItem>
    </Flex>
  </Example>
);

export const JustifyAndAlign = (args: any) => (
  <Example>
    <Flex justify="space-around">
      <FlexItem span="auto" className="flex-item">一个居中的盒子</FlexItem>
    </Flex>
  </Example>
);
