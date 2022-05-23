import React from 'react';
import { css } from 'styled-components';
import { HTMLCoralProps, StringOrNumber } from '../types';
import { space } from '../helpers';
import { Box } from './box';
import { useSystem } from '../provider';
import { forwardRef } from '../forward-ref';

const attachedStyle = css`
  > *:first-child:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > *:last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  > *:not(:last-child) {
    margin-right: -1px;
  }
`;

const normalStyle = css<any>`
  > *:not(:last-child) {
    margin-right: ${(props) => props['data-gapx']};
    margin-bottom: ${(props) => props['data-gapy']};
  }
`;

export interface GroupProps extends HTMLCoralProps<'div'> {
  /**
   * 是否吸附在一起
   */
  attached?: boolean;
  /**
   * 是否占满一行
   */
  block?: boolean;
  /**
   * 水平间距
   */
  spacingX?: StringOrNumber;
  /**
   * 垂直间距
   */
  spacingY?: StringOrNumber;
}

export const Group = forwardRef<GroupProps, 'div'>((props, ref) => {
  const { block, attached, spacingX = 'm', spacingY = 0, css, children, ...rest } = props;
  const { prefix } = useSystem();
  return (
    <Box
      ref={ref}
      role="group"
      display={block ? 'block' : 'inline-block'}
      css={[attached ? attachedStyle : normalStyle, css]}
      data-gapx={space(spacingX, prefix)}
      data-gapy={space(spacingY, prefix)}
      {...rest}
    >
      {children}
    </Box>
  );
});
