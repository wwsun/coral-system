import memoize from '@emotion/memoize';
import isPropValid from '@emotion/is-prop-valid';
import { compose } from './core';
import { layout } from './layout';
import { typography } from './typography';
import { flexbox } from './flexbox';
import { grid } from './grid';
import { position } from './position';
import { color } from './color';
import { border } from './border';
import { space } from './space';
import { shadow } from './shadows';
import { base } from './base';

const createShouldForwardProp = (props: string[]) => {
  const regex = new RegExp(`^(${props.join('|')})$`);
  return memoize((prop) => isPropValid(prop) && !regex.test(prop));
};

export const cssProps = (props: any) => {
  if (Array.isArray(props.css)) {
    return props.css.join('');
  }
  return props.css;
};

// 基础属性
const common = {
  config: {
    prefix: true,
    theme: true,
  },
};

export const allStyledProps = compose(
  common,
  base,
  layout,
  typography,
  flexbox,
  grid,
  position,
  color,
  border,
  space,
  shadow,
);

export const textStyledProps = compose(common, base, typography, color);

export const allStyledPropNames = allStyledProps.propNames;

export const shouldForwardProp = createShouldForwardProp(allStyledPropNames);

export * from './core';
export * from './base';
export * from './layout';
export * from './typography';
export * from './flexbox';
export * from './grid';
export * from './position';
export * from './color';
export * from './border';
export * from './space';
export * from './shadows';
