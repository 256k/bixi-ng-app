import { BixiNgAppPage } from './app.po';

describe('bixi-ng-app App', () => {
  let page: BixiNgAppPage;

  beforeEach(() => {
    page = new BixiNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
