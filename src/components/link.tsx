import React from 'react';
import { css } from 'styled-components';
import { coral } from '../coral';
import { forwardRef } from '../forward-ref';
import { useSystem } from '../provider';
import { colors } from '../helpers';
import type { As } from '../types';

const linkStyle = css<any>`
  text-decoration: none;
  color: ${(props) => props.$linkColor};

  &:hover {
    color: ${(props) => props.$hoverColor};
    text-decoration: underline;
  }

  &:active {
    color: ${(props) => props.$activeColor};
  }
`;

export interface LinkProps {
  isExternal?: boolean;
}

const A = coral<As, LinkProps>('a', linkStyle);

export const Link = forwardRef<LinkProps, 'a'>(({ isExternal, ...rest }, ref) => {
  const { prefix } = useSystem();
  const pass = {
    $linkColor: colors('link.link', prefix),
    $hoverColor: colors('link.hover', prefix),
    $activeColor: colors('link.active', prefix),
  };

  return <A target={isExternal ? '_blank' : undefined} {...rest} {...pass} ref={ref} />;
});
