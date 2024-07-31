export type ExactMatch<T, U extends T> = T & Record<keyof T, keyof U>;
