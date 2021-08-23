import React, { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { defaultTheme, Theme } from './theme';

const TextWrapper = styled.span`
  ${space}
  ${color}
  ${typography}
`;

export interface TextProps extends ColorProps, SpaceProps, TypographyProps {
  theme?: Theme;
}

export const Text = forwardRef<HTMLSpanElement, TextProps & HTMLAttributes<HTMLSpanElement>>(
  ({ theme = defaultTheme, ...props }, ref) => <TextWrapper theme={theme} {...props} ref={ref} />,
);
