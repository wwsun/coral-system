import { system, StylePropConfig } from './core';

const config: StylePropConfig = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  columnGap: {
    property: 'columnGap',
    scale: 'space',
  },
  rowGap: {
    property: 'rowGap',
    scale: 'space',
  },
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
};

export const flexbox = system(config);
