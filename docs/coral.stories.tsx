import React from 'react';
import { coral, css } from 'coral-system';

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
    <Test display="inline-block" bg="colors.gray.100" color="colors.gray.10" borderColor="colors.border.normal">
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
