import React from 'react';
import { css } from 'styled-components';
import { Box } from './box';
import { space, toPercent, toNumber } from '../helpers';
import { useSystem } from '../provider';
import { forwardRef } from '../forwad-ref';
import type { StringOrNumber, CoralProps } from '../types';

export interface FlexProps extends CoralProps {
  /**
   * 间距
   */
  spacing?: CoralProps['m'];
  /**
   * 子元素排列方向
   */
  direction?: CoralProps['flexDirection'];
  /**
   * y 轴对齐方式
   */
  align?: CoralProps['alignItems'];
  /**
   * x 轴对齐方式
   */
  justify?: CoralProps['justifyContent'];
  wrap?: CoralProps['flexWrap'];
  basis?: CoralProps['flexBasis'];
  grow?: CoralProps['flexGrow'];
  shrink?: CoralProps['flexShrink'];
}

const FlexStyle = css<any>`
  & > *:not(style) ~ *:not(style) {
    margin-top: ${(props) => props.flexDirection === 'column' && props['data-gap']};
    margin-left: ${(props) => props.flexDirection === 'row' && props['data-gap']};
    margin-bottom: ${(props) => props.flexDirection === 'column-reverse' && props['data-gap']};
    margin-right: ${(props) => props.flexDirection === 'row-reverse' && props['data-gap']};
  }
`;

export const Flex = forwardRef<FlexProps, 'div'>((props, ref) => {
  const { direction = 'row', spacing, align, justify, wrap, flex, basis, grow, shrink, css, ...rest } = props;
  const { prefix } = useSystem();
  const gap = space(spacing, prefix);

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap}
      flexBasis={basis}
      flexGrow={grow}
      flexShrink={shrink}
      css={[FlexStyle, css]}
      data-gap={gap}
      {...rest}
    />
  );
});

export interface FlexItemProps extends CoralProps {
  span?: StringOrNumber | 'auto';
}

// TODO: 待定
const COLS_TOTAL = 12;

const getWidth = (span: StringOrNumber) => {
  if (span === 'auto') {
    return span;
  }

  return toPercent(toNumber(span) / COLS_TOTAL);
};

export const FlexItem = forwardRef<FlexItemProps, 'div'>((props, ref) => {
  const { span, flex: flexProp, ...rest } = props;
  const width = span ? getWidth(span) : undefined;
  const flex = width ? '0 0 auto' : '1 0 0%';
  return <Box ref={ref} width={width} flex={flexProp || flex} {...rest} />;
});
