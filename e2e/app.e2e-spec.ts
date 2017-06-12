import { CanallaPage } from './app.po';

describe('canalla App', () => {
  let page: CanallaPage;

  beforeEach(() => {
    page = new CanallaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
