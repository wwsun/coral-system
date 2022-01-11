import styled from 'styled-components';
import { shouldForwardProp } from './core';
import { CoralSystemProps } from './types';
import { DEFAULT_PREFIX } from './helpers';

interface CoralOption {
  /**
   * css variable 的前缀
   * @example --coral
   */
  prefix?: string;
  /**
   * additional props
   */
  attrs?: object;
  /**
   * should forward props
   */
  shouldForwardProp?: (prop: object, defaultValidatorFn?: (prop: object) => boolean) => boolean;
}

export function coral(
  component: keyof JSX.IntrinsicElements | React.ComponentType<any>,
  css: CoralSystemProps['css'],
  options?: CoralOption,
) {
  const prefix = options.prefix || DEFAULT_PREFIX;
  const attrs = options.attrs || {};
  const shouldForward = options.shouldForwardProp || shouldForwardProp;

  return styled(component)
    .attrs({
      prefix,
      ...attrs,
    })
    .withConfig({
      shouldForwardProp: shouldForward as any,
    })<any>`
    ${css}
  `;
}
