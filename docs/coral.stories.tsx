import React from 'react';
import { coral } from 'coral-system';
import { css } from 'styled-components';

export default {
  title: 'coral factory',
};

const Test = coral(
  'div',
  css`
    background: red;
  `,
  {
    prefix: '--music',
  },
);

export function Basic() {
  return (
    <Test bg="colors.gray.100" color="colors.gray.10" borderColor="colors.border.normal">
      hello
    </Test>
  );
}

export function CustomPrefix() {
  return (
    <Test prefix="--test" bg="colors.gray.100" color="colors.gray.10">
      hello
    </Test>
  );
}
