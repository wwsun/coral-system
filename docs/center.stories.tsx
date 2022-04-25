import React from 'react';
import { Center, Text } from 'coral-system';

export default {
  title: 'components/Center',
  component: Center,
};

export const Basic = (args: any) => (
  <Center bg="tomato" height="100px" color="white">
    This is the Center
  </Center>
);

export const WithIcon = (args: any) => (
  <Center size="40px" bg="tomato" color="white">
    <Text as="span" fontWeight="bold" fontSize="title">
      1
    </Text>
  </Center>
);

export const Square = (args: any) => (
  <Center size="40px" bg="tomato" color="white" borderRadius="100%">
    <Text as="span" fontWeight="bold" fontSize="title">
      1
    </Text>
  </Center>
);
