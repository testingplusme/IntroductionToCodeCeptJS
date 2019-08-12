
Feature('Sending messages by contact form');

Scenario('Fill form with correct data and submit then check expected message: Message Sent (go back) ', (I) => {
    I.amOnPage("/");
    I.fillField('Name','ddkdkdkd');
    I.fillField('Email','kontakt+testowymail@testingplus.me');
    I.fillField('Comment','example comment');
    I.click('Submit');
    I.see('Message Sent (go back)');
});
