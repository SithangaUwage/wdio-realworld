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