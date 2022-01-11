import React from 'react';
import { coral, color } from 'coral-system';
import { css } from 'styled-components';

export default {
  title: 'coral factory',
};

const Test = coral(
  'div',
  css`
    background: red;

    ${color}
  `,
  {
    prefix: '--music',
  },
);

export function Basic() {
  return (
    <Test bg="colors.gray.100" color="colors.gray.10">
      hello
    </Test>
  );
}
