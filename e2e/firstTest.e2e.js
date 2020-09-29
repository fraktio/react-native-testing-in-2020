describe('Sign in screen e2e', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to OurWorkplace'))).toBeVisible();
  });

  it('should show home screen after sign in input', async () => {
    await element(by.id('username')).typeText('johan');
    await element(by.id('password')).typeText('trainee');
    await element(by.id('Sign in button')).tap();
    await expect(element(by.text('User list'))).toBeVisible();
  });
});
