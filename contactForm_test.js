Feature('Sending messages by contact form');

Scenario('Fill form with correct data and submit then check expected message: Message Sent (go back) ', (I, contactFormPage) => {
    I.amOnPage("/");
    contactFormPage.fillForm('ddddd', 'kontakt+testowymail@testingplus.me', 'dsdddd');
    I.see('Message Sent (go back)');
});


Scenario('Fill form with correct data and submit then check expected message: Message Sent (go back) - second ', (I, contactFormPage) => {
    I.amOnPage("/");
    contactFormPage.fillForm('ddddd', 'kontakt+testowymail@testingplus.me', 'dsdddd');
    I.see('Message Sent (go back)');
});

Scenario('Fill form with correct data and submit then check expected message: Message Sent (go back) - third ', (I, contactFormPage) =>{
    I.amOnPage("/");
    contactFormPage.fillForm('ddddd', 'kontakt+testowymail@testingplus.me', 'dsdddd');
    I.see('Message Sent (go back)');
});

Scenario('Fill form with correct data and submit then check expected message: Message Sent (go back) - fourth ', (I, contactFormPage) =>{
    I.amOnPage("/");
    I.saveScreenshot("main_screen.png");
    I.seeVisualDiff("main_screen.png", {tolerance: 2, prepareBaseImage: true});
    contactFormPage.fillForm('ddddd', 'kontakt+testowymail@testingplus.me', 'dsdddd');
    I.see('Message Sent (go back)');
    I.saveScreenshot("asserion_check.png");
    I.seeVisualDiff("assertion_check.png", {tolerance: 2, prepareBaseImage: true});
});



