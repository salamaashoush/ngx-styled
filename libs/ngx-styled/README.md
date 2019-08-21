# NgxStyled

[![npm version](https://badge.fury.io/js/ngx-styled.svg)](https://badge.fury.io/js/ngx-styled)

This is a simple  decorator to integrate [emotion](https://emotion.sh/docs/emotion) with angular components

```typescript
import { Styled } from 'ngx-styled';
import { Component } from '@angular/core'

@Component({
  template: '<div [ngClass]="classes"><button (click)="changeColor()">Change Color</button></div>',
})
@Styled<SimpleComponent>(({ component, css, injectGlobal }) => {
  // tslint:disable-next-line: no-unused-expression
  injectGlobal`
      body {
        background: ${component.color};
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  `;
  return css({
    '& button': {
      padding: 10,
      border: 'none',
      color: 'white',
      background: '#2c3e50'
    }
  });
})
class SimpleComponent {
  classes: string; // managed by ngx-styled
  color = 'green';

  changeColor(){
    // styles will be updated with component changes
    this.color = 'red';
  }
}
```
