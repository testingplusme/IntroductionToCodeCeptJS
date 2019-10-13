const {I} = inject();

module.exports = {
    fillForm(name, email, comment) {
        I.fillField('Name', name);
        I.fillField('Email', email);
        I.fillField('Comment', comment);
        I.click('Submit');
    }

}