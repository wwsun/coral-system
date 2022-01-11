export type StringOrNumber = string | number;

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type Length = string | 0 | number;
