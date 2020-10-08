describe('Login Page', function () {
  it('should let you log in', function () {
    // go to the login page
    browser.url('./login')

    // enter a valid username into the "email" input
    $('input[type="email"]').setValue('demo@learnwebdriverio.com')
    // enter a valid password into the "password" input
    $('input[type="password"]').setValue('wdiodemo')
    // click the 'Sign In' button
    $('button=Sign in').click()
    // assert that we're logged in
  })
// should error with a missing username
// should error with a missing password
})
