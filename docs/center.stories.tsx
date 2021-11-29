import React from 'react';
import { Center, Text } from 'coral-system';

export default {
  title: 'Center',
  component: Center,
};

export const Baisc = () => (
  <Center bg="tomato" height="100px" color="white">
    This is the Center
  </Center>
);

export const WithIcon = () => (
  <Center size="40px" bg="tomato" color="white">
    <Text as="span" fontWeight="bold" fontSize="title">
      1
    </Text>
  </Center>
);

export const Square = () => (
  <Center size="40px" bg="tomato" color="white" borderRadius="100%">
    <Text as="span" fontWeight="bold" fontSize="title">
      1
    </Text>
  </Center>
);
