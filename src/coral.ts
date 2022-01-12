import styled from 'styled-components';
import { shouldForwardProp, cssProps, allStyledProps } from './core';
import type { CoralProps, As, CoralComponent } from './types';

interface CoralOption<P> {
  /**
   * css variable 的前缀
   * 优先级 props prefix > theme context prefix > option prefix
   * @example --coral
   */
  prefix?: string;
  /**
   * additional props
   */
  attrs?: CoralProps | ((props?: P) => CoralProps);
  /**
   * should forward props
   */
  shouldForwardProp?: (prop: any, defaultValidatorFn?: (prop: any) => boolean) => boolean;
}

export function coral<T extends As, P = {}>(component: T, css?: CoralProps['css'], options?: CoralOption<P>) {
  const attrs = typeof options?.attrs === 'function' ? options?.attrs : () => options?.attrs;
  const shouldForward = options?.shouldForwardProp || shouldForwardProp;
  return styled(component as React.ComponentType<any>)
    .attrs((props) => ({
      prefix: props.prefix || options?.prefix,
      ...attrs(props),
    }))
    .withConfig({
      shouldForwardProp: shouldForward as any,
    })<any>`
    ${allStyledProps}
    ${cssProps}
    ${css}
  ` as CoralComponent<T, P>;
}
