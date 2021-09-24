import { StringOrNumber } from 'src/types';

export * from './design-token-helpers';

export function isNumber(value: any) {
  return typeof value === 'number';
}

export function toNumber(value: StringOrNumber) {
  if (typeof value === 'number') {
    return value;
  }

  const num = parseFloat(value);
  return isNaN(num) ? 0 : num;
}

export function toPercent(value: number) {
  return `${value * 100}%`;
}
