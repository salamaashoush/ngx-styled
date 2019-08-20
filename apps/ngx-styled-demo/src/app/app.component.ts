import { Component, OnChanges } from '@angular/core';
import { Styled } from '@ngx-styled/ngx-styled';

@Styled<AppComponent>(({ component, css, injectGlobal }) => {
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
@Component({
  selector: 'ngx-styled-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'ngx-styled-demo';
  color = '#3498db';
  ngOnChanges(): void {
    console.log('Here from the component');
  }
  changeColor() {
    this.color = this.color === '#2ecc71' ? '#3498db' : '#2ecc71';
  }
}
