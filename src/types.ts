import React from 'react';
import CSS from 'csstype';
import type { FlattenInterpolation } from 'styled-components';

export type StringOrNumber = string | number;

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type Length = string | 0 | number;

export type SystemScaleType =
  | 'colors'
  | 'fontSizes'
  | 'lineHeights'
  | 'borders'
  | 'radii'
  | 'shadows'
  | 'space'
  | 'sizes'
  | 'zIndices'
  | 'components';

export type SpaceTokenType = 's' | 'm' | 'l' | 'xl' | 'xxl';
export type FontSizeTokenType = 'note' | 'body' | 'subtitle' | 'title' | 'subheader' | 'header';
export type BorderTokenType = 'solid' | 'dashed';
export type RadiiTokenType = 's' | 'm' | 'l';
export type ShadowTokenType =
  | 'lowUp'
  | 'lowDown'
  | 'lowLeft'
  | 'lowRight'
  | 'medianUp'
  | 'medianDown'
  | 'medianLeft'
  | 'medianRight'
  | 'highUp'
  | 'highDown'
  | 'highLeft'
  | 'highRight';

// TODO: FIXME
type SpaceTokenValue = SpaceTokenType | StringOrNumber;

/**
 * 基础类型定义
 */
export interface CoralSystemProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  /**
   * 渲染的 HTML 元素
   */
  as?: string | React.ComponentType<any>;
  /**
   * 自定义样式，传入 css`` 的结果
   */
  css?: FlattenInterpolation<any> | FlattenInterpolation<any>[];
}

export interface SpaceProps {
  m?: SpaceTokenValue;
  margin?: SpaceTokenValue;
  mt?: SpaceTokenValue;
  marginTop?: SpaceTokenValue;
  mr?: SpaceTokenValue;
  marginRight?: SpaceTokenValue;
  mb?: SpaceTokenValue;
  marginBottom?: SpaceTokenValue;
  ml?: SpaceTokenValue;
  marginLeft?: SpaceTokenValue;
  mx?: SpaceTokenValue;
  marginX?: SpaceTokenValue;
  my?: SpaceTokenValue;
  marginY?: SpaceTokenValue;
  p?: SpaceTokenValue;
  padding?: SpaceTokenValue;
  pt?: SpaceTokenValue;
  paddingTop?: SpaceTokenValue;
  pr?: SpaceTokenValue;
  paddingRight?: SpaceTokenValue;
  pb?: SpaceTokenValue;
  paddingBottom?: SpaceTokenValue;
  pl?: SpaceTokenValue;
  paddingLeft?: SpaceTokenValue;
  px?: SpaceTokenValue;
  paddingX?: SpaceTokenValue;
  py?: SpaceTokenValue;
  paddingY?: SpaceTokenValue;
}

export interface ColorProps {
  color?: CSS.Property.Color;
  bg?: CSS.Property.Color;
  backgroundColor?: CSS.Property.Color;
  opacity?: CSS.Property.Opacity;
}

export interface LayoutProps {
  width?: StringOrNumber;
  minWidth?: StringOrNumber;
  maxWidth?: StringOrNumber;
  height?: StringOrNumber;
  minHeight?: StringOrNumber;
  maxHeight?: StringOrNumber;
  size?: StringOrNumber;
  display?: CSS.Property.Display;
  verticalAlign?: CSS.Property.VerticalAlign;
  overflow?: CSS.Property.Overflow;
  overflowX?: CSS.Property.OverflowX;
  overflowY?: CSS.Property.OverflowY;
}

export interface TypographyProps {
  fontFamily?: CSS.Property.FontFamily;
  fontStyle?: CSS.Property.FontStyle;
  letterSpacing?: CSS.Property.LetterSpacing;
  textAlign?: CSS.Property.TextAlign;
  fontSize?: FontSizeTokenType | string;
  fontWeight?: CSS.Property.FontWeight;
  lineHeight?: StringOrNumber;
}

export interface FlexboxProps {
  alignItems?: CSS.Property.AlignItems;
  alignContent?: CSS.Property.AlignContent;
  justifyItems?: CSS.Property.JustifyItems;
  justifyContent?: CSS.Property.JustifyContent;
  flexWrap?: CSS.Property.FlexWrap;
  flexDirection?: CSS.Property.FlexDirection;
  columnGap?: CSS.Property.ColumnGap;
  // item
  flex?: CSS.Property.Flex<Length>;
  flexGrow?: CSS.Property.FlexGrow;
  flexShrink?: CSS.Property.FlexShrink;
  flexBasis?: CSS.Property.FlexBasis<Length>;
  justifySelf?: CSS.Property.JustifySelf;
  alignSelf?: CSS.Property.AlignSelf;
  order?: CSS.Property.Order;
}

export interface GridProps {
  gridGap?: CSS.Property.GridGap<Length>;
  gridRowGap?: CSS.Property.GridRowGap<Length>;
  gridColumnGap?: CSS.Property.GridColumnGap<Length>;
  gridColumn?: CSS.Property.GridColumn;
  gridColumnStart?: CSS.Property.GridColumnStart;
  gridColumnEnd?: CSS.Property.GridColumnEnd;
  gridRow?: CSS.Property.GridRow;
  gridRowStart?: CSS.Property.GridRowStart;
  gridRowEnd?: CSS.Property.GridRowEnd;
  gridArea?: CSS.Property.GridArea;
  gridTemplateRows?: CSS.Property.GridTemplateRows;
  gridTemplateColumns?: CSS.Property.GridTemplateColumns;
  gridTemplateAreas?: CSS.Property.GridTemplateAreas;
}

type BorderTokenValue = BorderTokenType | string;
type BorderRadiusValue = RadiiTokenType | string;

export interface BorderProps {
  border?: BorderTokenValue;
  borderTop?: BorderTokenValue;
  borderRight?: BorderTokenValue;
  borderBottom?: BorderTokenValue;
  borderLeft?: BorderTokenValue;
  borderWidth?: StringOrNumber;
  borderColor?: CSS.Property.Color;
  borderTopColor?: CSS.Property.Color;
  borderRightColor?: CSS.Property.Color;
  borderBottomColor?: CSS.Property.Color;
  borderLeftColor?: CSS.Property.Color;
  borderRadius?: BorderRadiusValue;
}

export interface PositionProps {
  position?: CSS.Property.Position;
  zIndex?: CSS.Property.ZIndex;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

type BoxShadowValue = ShadowTokenType | CSS.Property.BoxShadow;

export interface ShadowProps {
  boxShadow?: BoxShadowValue;
  textShadow?: CSS.Property.TextShadow;
}
