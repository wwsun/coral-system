import { createGlobalStyle } from 'styled-components';

export const CssVariables = createGlobalStyle<{ variables?: any }>`
  :root {
    ${(props) => props.variables.map((item: string[]) => item.join(':')).join(';')}
  }
`;
