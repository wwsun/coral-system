import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { shouldForwardProp, allStyledProps } from '../core';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  FlexboxProps,
  GridProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from '../types';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    GridProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  as?: any;
  /**
   * 自定义样式，传入 css`` 的结果
   */
  css?: any;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const StyledBox = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return shouldForwardProp(prop) && defaultValidatorFn(prop);
  },
})<any>`
  ${allStyledProps}
  ${(props) => props.css}
`;

export const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
  return <StyledBox ref={ref} {...props} />;
});
