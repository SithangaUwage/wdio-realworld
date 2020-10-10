describe('Login Page', function () {
  it('should let you log in', function () {
    browser.url('./login')

    $('input[type="email"]').setValue('demo@learnwebdriverio.com')
    $('input[type="password"]').setValue('wdiodemo')
    
    const $signIn = $('button*=Sign in');
    $signIn.click();
    $signIn.waitForDisplayed({ reverse: true });

    $('a[href="/my-feed"]').waitForDisplayed()

    expect($('.error-messages li')).not.toBeExisting();
  })
// should error with a missing username
// should error with a missing password
})
