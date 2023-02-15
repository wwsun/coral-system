import { system, StylePropConfig } from './core';

export const base = system({
  // visible: {
  //   property: 'visibility',
  //   scale: 'base',
  //   getValue: (val: boolean) => (!!val ? 'visible' : 'hidden'),
  // },
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  overflowWrap: true,
  textOverflow: true,
  cursor: true,
  outline: true,
});
