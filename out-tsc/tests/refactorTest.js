"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testcafe_1 = require("testcafe");
const RefactorPageModel_1 = require("../pageModels/RefactorPageModel");
const CommonPageModel_1 = require("../pageModels/CommonPageModel");
const refactorLocators_1 = require("../pageModels/locators/refactorLocators");
const commonLocators_1 = require("../pageModels/locators/commonLocators");
const data_1 = require("../pageModels/data/data");
// Instantiate imports
const common = new CommonPageModel_1.CommonPageModel();
const refactorPageModel = new RefactorPageModel_1.RefactorPageModel();
// Instantiate an Admin role
const admin = testcafe_1.Role(refactorLocators_1.refactorLocators.landingPageURL, (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t
        .click(testcafe_1.Selector('a').withExactText(commonLocators_1.commonLocators.adminPanelText))
        .typeText(common.usernameField, data_1.data.username)
        .typeText(common.passwordField, data_1.data.password)
        .click(common.loginButton);
}), { preserveUrl: true });
fixture `Challenge 2 tests`;
// Test one: Check to see if you can log in with valid credentials
test('Should be able to login', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t
        .useRole(admin)
        .expect(refactorPageModel.roomsMenu.exists).ok('Cannot log in');
}));
// Test two: Check to see if rooms are saved and displayed in the UI
test('Should be able to save rooms', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t.useRole(admin);
    let roomRowCount1 = yield testcafe_1.Selector(refactorPageModel.roomRow).count;
    yield t
        .typeText(refactorPageModel.roomNumField, data_1.data.roomInputValue)
        .typeText(refactorPageModel.roomPriceField, data_1.data.roomInputValue)
        .click(common.createButton);
    let roomRowCount2 = yield testcafe_1.Selector(refactorPageModel.roomRow).count;
    yield t.expect(roomRowCount2).gte(roomRowCount1, 'Room was not saved');
}));
// Test three: Check to see the confirm message appears when branding is updated
test('Should be able to update branding', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t
        .useRole(admin)
        .navigateTo(refactorLocators_1.refactorLocators.brandingPageURL)
        .selectText(refactorPageModel.brandingNameField)
        .typeText(refactorPageModel.brandingNameField, data_1.data.brandingUpdateText)
        .click(refactorPageModel.brandingSubmitButton)
        .expect(refactorPageModel.brandingCloseButton.exists).ok('Branding did not update successfully');
}));
// Test four: Check to see if the contact form shows a success message
test('Should see success message', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t
        .navigateTo(refactorLocators_1.refactorLocators.landingPageURL)
        .typeText(refactorPageModel.formNameField, data_1.data.name)
        .typeText(refactorPageModel.formEmailField, data_1.data.email)
        .typeText(refactorPageModel.formPhoneField, data_1.data.phone)
        .typeText(refactorPageModel.formSubjectField, data_1.data.subject)
        .typeText(refactorPageModel.formMessageField, data_1.data.message)
        .click(refactorPageModel.formSubmitButton)
        .expect(refactorPageModel.formSubmitNoteArea.innerText).contains(refactorLocators_1.refactorLocators.formSubmitNoteText, 'Success message does not display');
}));
// Test five: Check to see if unread messages are bolded
test('Should see unread messages are bolded', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t
        .useRole(admin)
        .navigateTo(refactorLocators_1.refactorLocators.messagesPageURL)
        .expect(refactorPageModel.unreadMessage.count).gte(1, 'There are no unread messages')
        .expect(refactorPageModel.unreadMessage.nth(0).getStyleProperty('font-weight')).eql(refactorLocators_1.refactorLocators.unreadMessageFontWeight, 'Unread messages are not bolded');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmYWN0b3JUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvcmVmYWN0b3JUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTBDO0FBQzFDLHVFQUFvRTtBQUNwRSxtRUFBZ0U7QUFDaEUsOEVBQTJFO0FBQzNFLDBFQUF1RTtBQUN2RSxrREFBK0M7QUFHL0Msc0JBQXNCO0FBQ3RCLE1BQU0sTUFBTSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ3JDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0FBRWxELDRCQUE0QjtBQUM1QixNQUFNLEtBQUssR0FBRyxlQUFJLENBQUMsbUNBQWdCLENBQUMsY0FBYyxFQUFFLENBQU0sQ0FBQyxFQUFDLEVBQUU7SUFDMUQsTUFBTSxDQUFDO1NBQ0YsS0FBSyxDQUFDLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLCtCQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDakUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsV0FBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFBLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUxQixPQUFPLENBQUEsbUJBQW1CLENBQUM7QUFFM0Isa0VBQWtFO0FBQ2xFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFNLENBQUMsRUFBQyxFQUFFO0lBQ3RDLE1BQU0sQ0FBQztTQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDZCxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FB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