import { css, flush, injectGlobal } from 'emotion';
import { StyledProps } from './types';
const HOOKS = ['ngDoCheck'];
function generateStyles(styleFn: any) {
  flush();
  this.classes = styleFn({
    component: this,
    css,
    injectGlobal
  });
}
export function Styled<I>(props: StyledProps<I>) {
  return function<T extends new (...args: any[]) => {}>(constructor: T) {
    HOOKS.forEach(hook => {
      const originalHook = constructor.prototype[hook];
      constructor.prototype[hook] = function(...args: any) {
        generateStyles.apply(this, [props]);
        if (originalHook) originalHook.apply(this, args);
      };
    });
  };
}
