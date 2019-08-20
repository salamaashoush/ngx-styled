import { css, injectGlobal, Interpolation } from 'emotion';

export type StyledProps<T> = (context: StyledContext<T>) => Interpolation;

export interface StyledContext<T> {
  component: T;
  css: typeof css;
  injectGlobal: typeof injectGlobal;
}
