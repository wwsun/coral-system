import React from 'react';
import styled from 'styled-components';
import { shouldForwardProp, allStyledProps, cssProps } from '../core';
import type {
  CoralSystemProps,
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
  extends CoralSystemProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    GridProps,
    BorderProps,
    PositionProps,
    ShadowProps {}

const StyledBox = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return shouldForwardProp(prop) && defaultValidatorFn(prop);
  },
})<any>`
  ${allStyledProps}
  ${cssProps}
`;

export const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
  return <StyledBox ref={ref} {...props} />;
});
