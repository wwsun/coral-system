import { css } from 'styled-components';
import { coral } from '../coral';
import type { As, TypographyProps } from '../types';

const truncatedStyle = css`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const textClampStyle = css<any>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$lineClamp};
`;

const textStyle = css<any>`
  ${(props) => props.$lineClamp > 0 && textClampStyle};
  ${(props) => props.$truncated && truncatedStyle};
`;

export interface TextProps {
  /**
   * 文本对齐方式
   */
  align?: TypographyProps['textAlign'];
  /**
   * 是否在容器内自动截断（单行展示）
   */
  truncated?: boolean;
  /**
   * 最多展示的行数（超出截断）
   */
  lineClamp?: number;
}

export const Text = coral<As, TextProps>('span', textStyle, {
  attrs: (props) => ({
    color: 'text.normal',
    textAlign: props.align,
    $truncated: props.truncated,
    $lineClamp: props.lineClamp,
  }),
});
