/*
describe('Homepage', function () {
  it('should load properly', function () {
    // load the page
    browser.url('./');
    // Get the title of the homepage, should be 'Conduit'
    if (browser.getTitle() !== 'Conduit') {
      // throw an error explaining what went wrong
      throw new Error('Title of the homepage should be "Conduit"');
    }
    // Click the 'Sign in' navigation link
    $('=Sign in').click();
    // Get the URL of the sign in page. It should include 'login'
    if (browser.getUrl() !== 'http://localhost:8080/login') {
      throw new Error('URL of "login" page should be correct');
    }
  });
});
*/

// Stage 2
/*
const assert = require('assert');
describe('Homepage', function () {
  it('should load properly', function () {
        // load the page
    browser.url('./');
    // Get the title of the homepage, should be 'Conduit'
    assert.strictEqual(browser.getTitle(), 'Conduit'); // Click the 'Sign in' navigation link
    $('=Sign in').click();
    // Get the URL of the sign in page. It should include 'login'
    assert.strictEqual(browser.getUrl(), 'http://localhost:8080/login');
  });
});
*/

// Stage 3
/*
describe('Homepage', function () {
  it('should load properly', function () {
      // load the page
    browser.url('./');
    // Get the title of the homepage, should be 'Conduit'
    expect(browser).toHaveTitle('Conduit'); // Click the 'Sign in' navigation link
    $('=Sign in').click();
    // Get the URL of the sign in page. It should include 'login'
    expect(browser).toHaveUrl('http://localhost:8080/login');
  });
});
*/

// Stage 4
/*
describe('Homepage', function () {
  it('should load properly', function () {
    // load the page
    browser.url('./');
    // Get the title of the homepage, should be 'Conduit'
    expect(browser).toHaveTitle('Conduit'); // Click the 'Sign in' navigation link
    $('=Sign in').click();
    // Get the URL of the sign in page. It should include 'login'
    expect(browser).toHaveUrl('/login', { containing: true });
  });
});
*/

// Stage 5
/*
describe('Homepage', function () {
  it('should load properly', function () {
    // load the page
    browser.url('./');
    // Get the title of the homepage, should be 'Conduit'
    expect(browser).toHaveTitle('Conduit');
    // Click the 'Sign in' navigation link
    $('=Sign in').click();
    // Get the URL of the sign in page. It should include 'login'
    expect(browser).toHaveUrl('/login', { containing: true });

    $('(//a[contains(text(),"conduit")])[1]').click()
    expect(browser).toHaveUrl('http://localhost:8080/');
  });
});
*/

// Stage 5 Challenge
// footer $('//span[@class="attribution"]')
// popular tags $$('//div[@class="tag-list"]//a')
// popular tags with text $('//p[text()="Popular Tags"]/..//a')
