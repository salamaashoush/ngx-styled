import { getGreeting } from '../support/app.po';

describe('ngx-styled', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngx-styled!');
  });
});
