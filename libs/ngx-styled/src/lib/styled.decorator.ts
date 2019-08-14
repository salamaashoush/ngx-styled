import { css, injectGlobal } from 'emotion';
import { StyledProps } from './types';

export function Styled<I>(props: StyledProps<I>) {
  return <T extends new (...args: any[]) => {}>(constructor: T) => {
    return class extends constructor {
      classes: string;
      generateStyles() {
        this.classes = css(props.style(this as any));
        if (typeof props.globalStyle === 'function') {
          injectGlobal(props.globalStyle(this as any));
        }
      }
    };
  };
}
