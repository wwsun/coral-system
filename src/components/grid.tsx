import React from 'react';
import { Box } from './box';
import { isNumber, space } from '../helpers';
import { useSystem } from '../provider';
import { forwardRef } from '../forwad-ref';
import type { StringOrNumber, CoralProps, HTMLCoralProps } from '../types';

export interface GridProps extends HTMLCoralProps<'div'> {
  /**
   * 列数
   */
  columns?: StringOrNumber;
  /**
   * 间距
   */
  spacing?: CoralProps['m'];
  /**
   * 水平方向间距
   */
  spacingX?: CoralProps['m'];
  /**
   * 垂直方向间距
   */
  spacingY?: CoralProps['m'];
  /**
   * 子元素最小宽度
   */
  minChildWidth?: StringOrNumber;
  /**
   * 定义每一列的宽度
   */
  templateColumns?: CoralProps['gridTemplateColumns'];
  /**
   * 定义每一行的高度
   */
  templateRows?: CoralProps['gridTemplateRows'];
  templateArea?: CoralProps['gridTemplateAreas'];
  area?: CoralProps['gridArea'];
}

export const Grid = forwardRef<GridProps, 'div'>((props, ref) => {
  const {
    columns,
    spacingX,
    spacingY,
    spacing,
    minChildWidth,
    templateColumns: templateColumnsProp,
    templateRows,
    area,
    templateArea,
    ...rest
  } = props;
  const { prefix } = useSystem();
  const templateColumns = minChildWidth ? widthToColumns(minChildWidth) : countToColumns(columns);

  return (
    <Box
      display="grid"
      gridGap={space(spacing, prefix)}
      gridColumnGap={space(spacingX, prefix)}
      gridRowGap={space(spacingY, prefix)}
      gridTemplateColumns={templateColumnsProp || templateColumns}
      gridTemplateRows={templateRows}
      gridArea={area}
      gridTemplateAreas={templateArea}
      ref={ref}
      {...rest}
    />
  );
});

export interface GridItemProps extends HTMLCoralProps<'div'> {
  colSpan?: StringOrNumber;
  colStart?: CoralProps['gridColumnStart'];
  colEnd?: CoralProps['gridColumnEnd'];
  rowSpan?: StringOrNumber;
  rowStart?: CoralProps['gridRowEnd'];
  rowEnd?: CoralProps['gridRowEnd'];
}

export const GridItem = forwardRef<GridItemProps, 'div'>((props, ref) => {
  const { colSpan = 'auto', colStart, colEnd, rowEnd, rowSpan = 'auto', rowStart, ...rest } = props;
  return (
    <Box
      ref={ref}
      gridColumn={toSpan(colSpan)}
      gridColumnStart={colStart}
      gridColumnEnd={colEnd}
      gridRow={toSpan(rowSpan)}
      gridRowStart={rowStart}
      gridRowEnd={rowEnd}
      {...rest}
    />
  );
});

function toSpan(span: StringOrNumber) {
  return span === 'auto' ? 'auto' : `span ${span}/span ${span}`;
}

function toPx(n: StringOrNumber) {
  return isNumber(n) ? `${n}px` : n;
}

function widthToColumns(width: StringOrNumber) {
  return `repeat(auto-fit, minmax(${toPx(width)}, 1fr))`;
}

function countToColumns(count: StringOrNumber) {
  return `repeat(${count}, 1fr)`;
}
