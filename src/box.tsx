import React, { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';
import { defaultTheme, Theme } from './theme';

const BoxWrapper = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;

export interface SystemProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  theme?: Theme;
}

export const Box = forwardRef<HTMLDivElement, SystemProps & HTMLAttributes<HTMLDivElement>>(
  ({ theme = defaultTheme, ...props }, ref) => <BoxWrapper theme={theme} {...props} ref={ref} />,
);
