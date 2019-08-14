import { Component } from '@angular/core';
import { Styled } from '@ngx-styled/ngx-styled';
@Component({
  selector: 'ngx-styled-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Styled<AppComponent>({
  style: _componentInstance => {
    return `
      & button{
        padding: 10px;
        border: none;
        color: white;
        background: #2c3e50;
      }
    `;
  },
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
export class AppComponent {
  title = 'ngx-styled-demo';
  color = '#3498db';

  changeColor() {
    this.color = '#2ecc71';
  }
}
