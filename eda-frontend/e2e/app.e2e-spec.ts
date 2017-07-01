import { EdaFrontendPage } from './app.po';

describe('eda-frontend App', () => {
  let page: EdaFrontendPage;

  beforeEach(() => {
    page = new EdaFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
