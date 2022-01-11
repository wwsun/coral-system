import { assign } from 'lodash-es';
import {
  getToken,
  sizes,
  space,
  radii,
  fontSizes,
  lineHeights,
  colors,
  shadows,
  borders,
  DEFAULT_PREFIX,
} from '../helpers';
import { SystemScaleType } from '../types';

const getRawValue = (value: any) => value;

const getValueMap = {
  colors,
  fontSizes,
  lineHeights,
  space,
  sizes,
  borders,
  radii,
  shadows,
  zIndices: getToken,
};

export const system = (args: object) => {
  const config = {};

  const keys = Object.keys(args);
  for (const key of keys) {
    const conf = args[key];
    if (conf === true) {
      config[key] = createStyleFunction({
        property: key,
        getValue: getRawValue,
      });
    } else {
      // conf is a object
      config[key] = createStyleFunction(conf);
    }
  }
  const parser = createParser(config);
  return parser;
};

export const compose = (...parsers: any[]) => {
  const config = {};
  for (const parser of parsers) {
    if (!parser || !parser.config) {
      continue;
    }
    assign(config, parser.config);
  }
  const parser = createParser(config);
  return parser;
};

function createParser(config: any) {
  const parse = (props: Record<string, any>) => {
    const styles = {};

    const prefix = props.theme?.prefix || props.prefix || DEFAULT_PREFIX;

    for (const key in props) {
      if (key === 'theme') continue;
      if (key === 'prefix') continue;
      if (!config[key]) continue;

      const sx = config[key];
      const raw = props[key];
      // const scale = sx.scale;

      // TODO: raw is object
      // TODO: raw is responsive object

      assign(styles, sx(raw, prefix));
    }

    return styles;
  };
  parse.config = config;
  parse.propNames = Object.keys(config);

  return parse;
}

export interface StyleProp {
  /**
   * 映射的属性列表
   */
  properties?: string[];
  /**
   * 映射的单个属性
   */
  property?: string;
  /**
   * 所属主题类别
   */
  scale?: SystemScaleType;
  /**
   * 自定义值的获取
   */
  getValue?: (value: any, prefix?: string) => any;
}

export type StylePropConfig = Record<string, StyleProp | boolean>;

function createStyleFunction({ properties: propertiesProp, property, scale, getValue: getValueProp }: StyleProp) {
  const properties = propertiesProp || [property];
  const getValue = getValueProp || getValueMap[scale] || getRawValue;
  const sx = (value: any, prefix: string) => {
    const result = {};
    const n = getValue(value, prefix);
    if (n === null) {
      return;
    }

    properties.forEach((prop: string) => {
      result[prop] = n;
    });

    return result;
  };

  sx.scale = scale;

  return sx;
}
