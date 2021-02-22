import { Role, Selector } from 'testcafe';
import { RefactorPageModel } from '../pageModels/RefactorPageModel';
import { CommonPageModel } from '../pageModels/CommonPageModel';
import { refactorLocators } from '../pageModels/locators/refactorLocators';
import { commonLocators } from '../pageModels/locators/commonLocators';
import { data } from '../pageModels/data/data';


// Instantiate imports
const common = new CommonPageModel();
const refactorPageModel = new RefactorPageModel();

// Instantiate an Admin role
const admin = Role(refactorLocators.landingPageURL, async t => {
    await t
        .click(Selector('a').withExactText(commonLocators.adminPanelText))
        .typeText(common.usernameField, data.username)
        .typeText(common.passwordField, data.password)
        .click(common.loginButton);
}, { preserveUrl: true });

fixture`Challenge 2 tests`;

// Test one: Check to see if you can log in with valid credentials
test('Should be able to login', async t => {
    await t
        .useRole(admin)
        .expect(refactorPageModel.roomsMenu.exists).ok('Cannot log in');
});

// Test two: Check to see if rooms are saved and displayed in the UI
test('Should be able to save rooms', async t => {
    await t.useRole(admin);
    let roomRowCount1 = await Selector(refactorPageModel.roomRow).count;

    await t
        .typeText(refactorPageModel.roomNumField, data.roomInputValue)
        .typeText(refactorPageModel.roomPriceField, data.roomInputValue)
        .click(common.createButton);

    let roomRowCount2 = await Selector(refactorPageModel.roomRow).count;
    await t.expect(roomRowCount2).gte(roomRowCount1, 'Room was not saved');
});


// Test three: Check to see the confirm message appears when branding is updated
test('Should be able to update branding', async t => {
    await t
        .useRole(admin)
        .navigateTo(refactorLocators.brandingPageURL)
        .selectText(refactorPageModel.brandingNameField)
        .typeText(refactorPageModel.brandingNameField, data.brandingUpdateText)
        .click(refactorPageModel.brandingSubmitButton)
        .expect(refactorPageModel.brandingCloseButton.exists).ok('Branding did not update successfully');
});

// Test four: Check to see if the contact form shows a success message
test('Should see success message', async t => {
    await t
        .navigateTo(refactorLocators.landingPageURL)
        .typeText(refactorPageModel.formNameField, data.name)
        .typeText(refactorPageModel.formEmailField, data.email)
        .typeText(refactorPageModel.formPhoneField, data.phone)
        .typeText(refactorPageModel.formSubjectField, data.subject)
        .typeText(refactorPageModel.formMessageField, data.message)
        .click(refactorPageModel.formSubmitButton)
        .expect(refactorPageModel.formSubmitNoteArea.innerText).contains(refactorLocators.formSubmitNoteText, 'Success message does not display');
});

// Test five: Check to see if unread messages are bolded
test('Should see unread messages are bolded', async t => {
    await t
        .useRole(admin)
        .navigateTo(refactorLocators.messagesPageURL)
        .expect(refactorPageModel.unreadMessage.count).gte(1, 'There are no unread messages')
        .expect(refactorPageModel.unreadMessage.nth(0).getStyleProperty('font-weight')).eql(refactorLocators.unreadMessageFontWeight, 'Unread messages are not bolded');
});