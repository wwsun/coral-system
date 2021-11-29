import React from 'react';
import { Box } from './box';
import type { BoxProps } from './box';

export const Center = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box ref={ref} display="flex" alignItems="center" justifyContent="center" {...props} />;
});
