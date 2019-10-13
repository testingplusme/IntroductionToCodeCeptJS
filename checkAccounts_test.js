Feature('Check logging form');

let accounts = new DataTable(['login', 'password']);
accounts.add(['followerselenium1', 'selenium123']);
accounts.add(['followerselenium2', 'selenium123456']);


Data(accounts).Scenario('Check are accounts working @accounts', (I, current) => {
    I.amOnPage("https://wordpress.com/log-in?redirect_to=%2Fme%2F");
    I.fillField('#usernameOrEmail', current.login);
    I.click('Continue');
    I.fillField('#password', current.password);
    I.seeElement('.login__form-action button');
    I.click('.login__form-action button');
    I.waitInUrl('/me', 10);
    I.waitForElement('.profile-gravatar__user-display-name', 15);
    I.see(current.login, '.profile-gravatar__user-display-name');
});