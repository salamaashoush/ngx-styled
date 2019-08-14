import { css, injectGlobal } from 'emotion';
import { StyledProps } from './types';
const LIFE_CYCELS = ['ngDoCheck', 'ngDoCheck'];
export function Styled<I>(props: StyledProps<I>) {
  return <T extends new (...args: any[]) => {}>(constructor: T) => {
    constructor.prototype.classes = '';

    function generateStyles() {
      this.classes = css(props.style(this as any));
      if (typeof props.globalStyle === 'function') {
        injectGlobal(props.globalStyle(this as any));
      }
    }
    LIFE_CYCELS.forEach(hook => {
      const originalHook = constructor.prototype[hook];
      constructor.prototype[hook] = function(...args: any) {
        generateStyles.apply(this);
        if (originalHook) originalHook.apply(this, args);
      };
    });
    return constructor;
  };
}
