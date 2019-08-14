import { OnInit, DoCheck } from '@angular/core';

export class StyledComponent implements OnInit, DoCheck {
  classes: string;
  ngOnInit(): void {
    this.generateStyles();
  }
  ngDoCheck(): void {
    this.generateStyles();
  }
  generateStyles() {}
}
