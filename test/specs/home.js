const Home = require('../pageObjects/Home.page');
const Auth = require('../pageObjects/Auth.page');
const Api = require('../../utils/Api');
const { user1 } = require('../fixtures/users');

const home = new Home();
const auth = new Auth();

describe('Homepage', function () {
  before(function () {
    const api = new Api('http://localhost:3000/api/');
    const token = browser.call(() => {
      return api.getAuthToken(user1);
    });
    // 4. Load the page in an unauthorized state
    home.load();
    // 5. Set the token
    browser.execute((browserToken) => {
      window.localStorage.setItem('id_token', browserToken);
    }, token);
    // 6. Reload the homepage
    home.load();
  });

  it('should load properly', function () {
    // check that top nav/footer exist
    expect(home.$siteHeader).toBeExisting();
    expect(home.$siteFooter).toBeExisting();
    expect(home.$siteNav).toBeExisting();
  });

  it('should only show the global feed tab', function () {
    expect(home.feedTabsText).toEqual(['Your Feed', 'Global Feed']);
  });

  it('should default to showing the global feed', function () {
    // get all tabs with an 'active' class, check only one returns with correct text
    expect(home.activeFeedTabText).toEqual(['Global Feed']);
  });

  it('should let you switch between global and personal feeds', function () {
    home.clickTab('Your Feed');
    expect(home.activeFeedTabText).toEqual(['Your Feed']);
    home.clickTab('Global Feed');
    expect(home.activeFeedTabText).toEqual(['Global Feed']);
  });
});

describe('Personal Feed', function () {
  before(function () {
  // ensure we're on the personal feed tab
    if (home.activeFeedTabText !== 'Your Feed') {
      home.clickTab('Your Feed');
    }
  });

  it('should show most recent articles from people you follow', function () {
    expect(home.currentFeed.$$articles).toHaveChildren(1);
  });
  after(function () {
    auth.clearSession();
  });
});
  
  

// describe('Logged In', function () {
//   before(function () {
//     auth.load();
//     auth.login(user1);
//     home.load();
//   });
  
//   after(function () {
//     browser.execute(function () {
//       auth.clearSession();
//     });
//   });
    
// });