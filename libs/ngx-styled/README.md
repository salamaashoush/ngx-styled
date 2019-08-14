# NgxStyled

This is a simple  decorator to integrate [emotion](https://emotion.sh/docs/emotion) with angular components

```typescript
import { Styled, StyledComponent } from 'ngx-styled';
import { Component } from '@angular/core'

@Component({
  template: '<div [ngClass]="classes"><button (click)="changeColor()">Change Color</button></div>',
})
@Styled<SimpleComponent>({
  // scoped component style
  style: componentInstance => {
    return `
      & button{
        padding: 10px;
        border: none;
        color: white;
        background: #2c3e50;
      }
    `;
  },
  // inject global style
  globalStyle: componentInstance => {
    return `
      body {
        background: ${componentInstance.color};
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }
})
class SimpleComponent extends StyledComponent {
  classes: string; // managed by ngx-styled
  color = 'green';

  changeColor(){
    // styles will be updated with component changes
    this.color = 'red';
  }
}
```
