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
   * 附加的初始化属性集
   */
  attrs?: CoralProps | ((props?: P) => CoralProps);
  /**
   * 是否转发 prop
   */
  shouldForwardProp?: (prop: any, defaultValidatorFn?: (prop: any) => boolean) => boolean;
}

/**
 * 创建一个 System Component
 * @param component HTML 标签
 * @param initCss 初始化的 CSS 样式
 * @param options 自定义选项
 * @returns react component
 */
export function coral<T extends As, P = {}>(component: T, initCss?: CoralProps['css'], options?: CoralOption<P>) {
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
    ${initCss}
    ${allStyledProps}
    ${cssProps}
  ` as CoralComponent<T, P>;
}
