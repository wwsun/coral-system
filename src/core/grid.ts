import { system, StylePropConfig } from './core';

const config: StylePropConfig = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridRowSpan: true,
};

export const grid = system(config);
