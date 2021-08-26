import React, { createContext, useContext, useMemo } from 'react';
import { defaultTheme } from '../theme';
import { getTokenValue, isValidTokenPath, tokenVar } from '../helpers';
import { CssVariables } from './global-styles';

const SystemContext = createContext({
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

function themeToVariables(obj: any, prefix = '--coral') {
  let paths: string[][] = [];

  Object.keys(obj).forEach((key) => {
    const keypath = prefix ? [prefix, key].join('-') : key;
    if (typeof obj[key] === 'string') {
      let val = obj[key];

      if (isValidTokenPath(val)) {
        val = tokenVar(val);
      }

      paths.push([keypath, val]);
    } else {
      paths = paths.concat(themeToVariables(obj[key], keypath));
    }
  });

  return paths;
}

export interface SystemProviderProps {
  theme?: any;
  children?: React.ReactNode;
}

export function SystemProvider({ theme = defaultTheme, children }: SystemProviderProps) {
  const context = useMemo(() => ({ theme }), [theme]);
  const variables = useMemo(() => themeToVariables(theme), [theme]);
  return (
    <SystemContext.Provider value={context}>
      <CssVariables variables={variables} />
      {children}
    </SystemContext.Provider>
  );
}
