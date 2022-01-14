import { coral } from '../coral';

export const Box = coral('div');

export const Button = coral('button');

export const Link = coral('a');

export const Center = coral('div', undefined, {
  attrs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
