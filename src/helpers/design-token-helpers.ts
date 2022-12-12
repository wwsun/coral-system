import { get, hasIn, isNil } from 'lodash';
import { defaultTheme } from '../theme';
import { StringOrNumber, SystemScaleType } from '../types';

export const DEFAULT_PREFIX = '--coral';

const hexRegex = /^#[a-fA-F0-9]{3,6}$/;
const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
const rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

function parseToRGB(color: string) {
  if (color.match(hexRegex)) {
    return {
      red: parseInt(`${color[1]}${color[2]}`, 16),
      green: parseInt(`${color[3]}${color[4]}`, 16),
      blue: parseInt(`${color[5]}${color[6]}`, 16),
    };
  }
  throw new Error('color is not a valid hex value');
}

/**
 * background: ${rgba('#ffffff', 0.4)};
 * @param hexColor
 * @param alpha
 */
export function rgba(hexColor: string, alpha: number) {
  if (!hexColor) {
    return;
  }

  const rgbValue = parseToRGB(hexColor);
  return `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},${alpha})`;
}

const THEME_TOKEN_PATTERN = /^(colors|fontSizes|lineHeights|borders|radii|shadows|space|sizes|zIndices|components)./;

const CSS_FUNCTION_PATTERN = /^[a-z]+(-[a-z]*)?\(.+\)$/;

/**
 * 是否为有效的 token path
 * @param token
 */
export function isValidTokenPath(token: string) {
  if (token && THEME_TOKEN_PATTERN.test(token)) {
    return true;
  }
  return false;
}

const tokenPathToVariable = (token: string, prefix: string) => {
  return `var(${prefix}-${token.split('.').join('-')})`;
};

type TokenGetterType = (token: any) => any;

function tokenGetterFactory(scale?: SystemScaleType, getter?: TokenGetterType) {
  return (token: StringOrNumber, prefix = DEFAULT_PREFIX) => {
    if (isNil(token)) {
      return;
    }

    if (getter && typeof getter === 'function') {
      const temp = getter(token);
      if (!isNil(temp)) {
        return temp;
      }
    }

    if (typeof token === 'number') {
      return token;
    }

    // 优先检查符合 tokenPath 规范，符合规范的直接转换，不检查有效性
    if (isValidTokenPath(token)) {
      return tokenPathToVariable(token, prefix);
    }

    // 再检查是不是 css function，如果是，直接返回
    if (CSS_FUNCTION_PATTERN.test(token)) {
      return token;
    }

    // 最后尝试加入 scale 在 theme 中寻找
    if (scale) {
      const themedToken = [scale, token].join('.');
      // TODO: 暂不支持解析到扩展 theme token，最好的做法是放到 ThemeProvider 里通过 context 找
      if (hasIn(defaultTheme, themedToken)) {
        return tokenPathToVariable(themedToken, prefix);
      }
    }

    // 不符合条件的直接返回
    return token;
  };
}

/**
 * 获取对应的 css variable token
 */
export const getToken = tokenGetterFactory();

/**
 * color token to css variables
 */
export const colors = tokenGetterFactory('colors', (token) => {
  if (hexRegex.test(token) || rgbRegex.test(token) || rgbaRegex.test(token)) {
    return token;
  }
  return;
});

export const borders = tokenGetterFactory('borders', (token) => {
  if (Number(token) === 0) {
    return 0;
  }
  if (token.split(' ').length > 1) {
    return token;
  }
  return;
});

export const shadows = tokenGetterFactory('shadows', (token) => {
  if (token && token.split(' ').length > 4) {
    return token;
  }
  return;
});

/**
 * 正则：匹配是否为有效的单位数值
 * @example
 * 22px, 22.2%, 33vw, 44vh
 */
const SIZE_UNIT_VALUE = /^\d+(\.\d+)?(px|vw|vh|%)$/;

const sizeGetter = (token: string) => {
  if (typeof token === 'number') {
    return `${token}px`;
  }

  if (typeof token === 'string' && SIZE_UNIT_VALUE.test(token)) {
    return token;
  }

  return;
};

export const sizes = tokenGetterFactory('sizes', sizeGetter);
export const space = tokenGetterFactory('space', sizeGetter);
export const radii = tokenGetterFactory('radii', sizeGetter);
export const fontSizes = tokenGetterFactory('fontSizes', sizeGetter);
export const lineHeights = tokenGetterFactory('lineHeights', (token: string) => {
  if (typeof token === 'number') {
    return token;
  }
  if (typeof token === 'string' && SIZE_UNIT_VALUE.test(token)) {
    return token;
  }
  return;
});

/**
 * 获取 value 的真实值
 * @param token
 * @param themeObject
 */
export function getTokenValue(token: string, themeObject = {}) {
  let val = token;

  while (isValidTokenPath(val)) {
    val = get(themeObject, val);
  }

  return val;
}
