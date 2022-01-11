import React, { createContext, useContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { assign } from 'lodash-es';
import { defaultTheme, ThemeType } from '../theme';
import { getTokenValue, isValidTokenPath, getToken, DEFAULT_PREFIX } from '../helpers';
import { CssVariables } from './global-styles';

const SystemContext = createContext({
  prefix: DEFAULT_PREFIX,
  theme: defaultTheme,
});

export const useSystem = () => useContext(SystemContext);

export const useTheme = () => {
  const { theme } = useSystem();
  const getValue = (path: string) => getTokenValue(path);
  return {
    theme,
    getValue,
  };
};

/**
 * 获取 css variable 的根节点，例如 --tango-colors-brand 返回 --tango
 * @param str
 * @returns
 */
const getRootPrefix = (str: string) => {
  const input = str.startsWith('--') ? str.slice(2) : str;
  return ['--', input.split('-')[0]].join('');
};

function themeToVariables(obj: ThemeType, prefix: string) {
  let paths: string[][] = [];

  Object.keys(obj).forEach((key) => {
    const keypath = prefix ? [prefix, key].join('-') : key;
    if (typeof obj[key] === 'string') {
      let val = obj[key];

      if (isValidTokenPath(val)) {
        const rootPrefix = getRootPrefix(prefix);
        val = getToken(val, rootPrefix);
      }

      paths.push([keypath, val]);
    } else {
      paths = paths.concat(themeToVariables(obj[key], keypath));
    }
  });

  return paths;
}

export interface SystemProviderProps {
  /**
   * css variable 的前缀
   * @example --coral
   */
  prefix?: string;
  /**
   * 自定义 theme 对象
   */
  theme?: ThemeType;
  children?: React.ReactNode;
}

export function SystemProvider({ prefix = DEFAULT_PREFIX, theme = defaultTheme, children }: SystemProviderProps) {
  const context = useMemo(() => ({ theme, prefix }), [theme, prefix]);
  const variables = useMemo(() => themeToVariables(theme, prefix), [theme, prefix]);
  const mergedTheme = useMemo(() => assign({}, theme, { prefix }), [theme, prefix]);

  return (
    <SystemContext.Provider value={context}>
      <ThemeProvider theme={mergedTheme}>
        <CssVariables variables={variables} />
        {children}
      </ThemeProvider>
    </SystemContext.Provider>
  );
}
