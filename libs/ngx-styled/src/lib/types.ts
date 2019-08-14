export interface StyledProps<T> {
  globalStyle?(instance: T): string;
  style(instance: T): string;
}
