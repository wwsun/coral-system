import { mergeWith } from 'lodash';
import {
  PartialRecord,
  SpaceTokenType,
  FontSizeTokenType,
  BorderTokenType,
  RadiiTokenType,
  ShadowTokenType,
} from './types';

type ColorTokenSerialKeyType = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
type ColorTokenGroupType = PartialRecord<ColorTokenSerialKeyType, string>;
type ThemeColorsType = {
  primary?: ColorTokenGroupType;
  gray?: ColorTokenGroupType;
  error?: ColorTokenGroupType;
  success?: ColorTokenGroupType;
  warning?: ColorTokenGroupType;
  black?: string;
  white?: string;
  brand?: string;
  highlight?: string;
  text?: Record<string, string>;
  background?: Record<string, string>;
  line?: Record<string, string>;
  custom?: Record<string, string>;
};

export type ThemeType = {
  /**
   * css variable 前缀
   */
  prefix?: string;
  colors?: ThemeColorsType;
  space?: PartialRecord<SpaceTokenType, string>;
  fontSizes?: PartialRecord<FontSizeTokenType, string>;
  borders?: PartialRecord<BorderTokenType, string>;
  radii?: PartialRecord<RadiiTokenType, string>;
  shadows?: PartialRecord<ShadowTokenType, string>;
};

export const defaultTheme: ThemeType = {
  colors: {
    // 主色序列
    primary: {
      10: '#f0f5ff',
      20: '#d6e4ff',
      30: '#adc6ff',
      40: '#85a5ff',
      50: '#597ef7',
      60: '#2f54eb',
      70: '#1d39c4',
      80: '#10239e',
      90: '#061178',
      100: '#030852',
    },
    // 灰色序列
    gray: {
      10: '#f5f5f5',
      20: '#f0f0f0',
      30: '#dddddd',
      40: '#bfbfbf',
      50: '#8c8c8c',
      60: '#595959',
      70: '#434343',
      80: '#262626',
      90: '#1f1f1f',
      100: '#141414',
    },
    // 警告色序列
    error: {
      10: '#fff2f0',
      20: '#ffedeb',
      30: '#ffc8c2',
      40: '#ffa099',
      50: '#f7716d',
      60: '#eb4141',
      70: '#c42d32',
      80: '#9e1c25',
      90: '#78101a',
      100: '#520A13',
    },
    // 成功色序列
    success: {
      10: '#e4f2e5',
      20: '#d3e6d6',
      30: '#a5d9ae',
      40: '#7acc8c',
      50: '#54bfcf',
      60: '#32b357',
      70: '#208c42',
      80: '#126630',
      90: '#08401e',
      100: '#031a0c',
    },
    // 警告色序列
    warning: {
      10: '#fffbe6',
      20: '#ffeda3',
      30: '#ffe07a',
      40: '#ffd152',
      50: '#ffbf29',
      60: '#ffa900',
      70: '#d98900',
      80: '#b36b00',
      90: '#8c4f00',
      100: '#663600',
    },
    // 品牌色
    black: '#000',
    white: '#FFF',
    brand: 'colors.primary.60',
    highlight: 'colors.error.50',
    text: {
      normal: 'rgba(0, 0, 0, 0.85)',
      secondary: 'rgba(0, 0, 0, 0.45)',

      title: 'colors.gray.100', // 标题
      body: 'colors.gray.80', // 正文
      note: 'colors.gray.70', // 辅助文本
      placeholder: 'colors.gray.40', // 占位，禁用
    },
    background: {
      normal: 'colors.gray.10',
      secondary: 'colors.gray.20',
    },
    line: {
      normal: 'colors.gray.30',
      secondary: 'colors.gray.40',
    },
  },
  space: {
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '16px',
    xxl: '20px',
  },
  fontSizes: {
    note: '12px',
    body: '12px',
    subtitle: '14px',
    title: '16px',
    subheader: '20px',
    header: '24px',
  },
  borders: {
    solid: '1px solid',
    dashed: '1px dashed',
  },
  radii: {
    s: '2px',
    m: '4px',
    l: '8px',
  },
  shadows: {
    lowUp:
      '0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03)',
    lowDown:
      '0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03)',
    lowLeft:
      '-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03)',
    lowRight:
      '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03)',

    medianUp:
      '0px -4px 8px -4px rgba(0,0,0,0.12),0px -8px 16px 0px rgba(0,0,0,0.08),0px -12px 24px 8px rgba(0,0,0,0.04)',
    medianRight:
      '4px 0px 8px -4px rgba(0,0,0,0.12),8px 0px 16px 0px rgba(0,0,0,0.08),12px 0px 24px 8px rgba(0,0,0,0.04)',
    medianDown:
      '0px 4px 8px -4px rgba(0,0,0,0.12),0px 8px 16px 0px rgba(0,0,0,0.08),0px 12px 24px 8px rgba(0,0,0,0.04)',
    medianLeft:
      '-4px 0px 8px -4px rgba(0,0,0,0.12),-8px 0px 16px 0px rgba(0,0,0,0.08),-12px 0px 24px 8px rgba(0,0,0,0.04)',

    highUp:
      '0px -8px 16px -8px rgba(0,0,0,0.08),0px -12px 24px 12px rgba(0,0,0,0.04),0px -16px 48px 16px rgba(0,0,0,0.02)',
    highRight:
      '8px 0px 16px -8px rgba(0,0,0,0.08),12px 0px 24px 12px rgba(0,0,0,0.04),16px 0px 48px 16px rgba(0,0,0,0.02)',
    highDown:
      '0px 8px 16px -8px rgba(0,0,0,0.08),0px 12px 24px 12px rgba(0,0,0,0.04),0px 16px 48px 16px rgba(0,0,0,0.02)',
    highLeft:
      '-8px 0px 16px -8px rgba(0,0,0,0.08),-12px 0px 24px 12px rgba(0,0,0,0.04),-16px 0px 48px 16px rgba(0,0,0,0.02)',
  },
};

/**
 * 修改默认主题
 * @param overrides
 * @param baseTheme
 * @returns
 */
export function extendTheme(overrides: ThemeType, baseTheme = defaultTheme) {
  return mergeWith({}, baseTheme, overrides);
}
