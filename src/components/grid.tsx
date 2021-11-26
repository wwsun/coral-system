import React, { forwardRef } from 'react';
import { Box, BoxProps } from './box';
import { isNumber, space } from '../helpers';
import { useSystem } from '../provider';
import type { StringOrNumber, SpaceProps } from '../types';


export interface GridProps extends BoxProps {
  /**
   * 列数
   */
  columns?: StringOrNumber;
  /**
   * 间距
   */
  spacing?: SpaceProps['m'];
  /**
   * 水平方向间距
   */
  spacingX?: SpaceProps['m'];
  /**
   * 垂直方向间距
   */
  spacingY?: SpaceProps['m'];
  /**
   * 子元素最小宽度
   */
  minChildWidth?: StringOrNumber;
  /**
   * 定义每一列的宽度
   */
  templateColumns?: BoxProps['gridTemplateColumns'];
  /**
   * 定义每一行的高度
   */
  templateRows?: BoxProps['gridTemplateRows'];
  templateArea?: BoxProps['gridTemplateAreas'];
  area?: BoxProps['gridArea'];
}

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
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

export interface GridItemProps extends BoxProps {
  colSpan?: StringOrNumber;
  colStart?: BoxProps['gridColumnStart'];
  colEnd?: BoxProps['gridColumnEnd'];
  rowSpan?: StringOrNumber;
  rowStart?: BoxProps['gridRowEnd'];
  rowEnd?: BoxProps['gridRowEnd'];
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>((props, ref) => {
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
