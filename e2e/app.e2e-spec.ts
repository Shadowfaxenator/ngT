import { NgTPage } from './app.po';

describe('ng-t App', function() {
  let page: NgTPage;

  beforeEach(() => {
    page = new NgTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
