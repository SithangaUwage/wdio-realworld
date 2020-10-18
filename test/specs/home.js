const Home = require('../pageObjects/Home.page');
const Auth = require('../pageObjects/Auth.page');
const { user1 } = require('../fixtures/users');

const home = new Home();
const auth = new Auth();

describe('Homepage', function () {
  before(function () {
    // load the page
    home.load();
  });

  it('should load properly', function () {
    // check that top nav/footer exist
    expect(home.$siteHeader).toBeExisting();
    expect(home.$siteFooter).toBeExisting();
    expect(home.$siteNav).toBeExisting();
  });

  it('should only show the global feed tab', function () {
    expect(home.feedTabsText).toEqual(['Global Feed']);
  });
});

describe('Logged In', function () {
  before(function () {
    auth.load();
    auth.login(user1);
    home.load();
  });
  
  after(function () {
    browser.execute(function () {
      auth.clearSession();
    });
  });
    
});