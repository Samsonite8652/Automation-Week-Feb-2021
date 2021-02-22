import { Selector } from 'testcafe';
import { refactorLocators } from './locators/refactorLocators';

export class RefactorPageModel {
    // UI artifact
    roomsMenu: Selector = Selector(refactorLocators.navBarClass).withExactText(refactorLocators.roomsMenuText);
    roomRow: Selector = Selector(refactorLocators.roomRowClass);
    roomNumField: Selector = Selector(refactorLocators.roomNumId);
    roomPriceField: Selector = Selector(refactorLocators.roomPriceId);
    brandingNameField: Selector = Selector(refactorLocators.brandingNameId);
    brandingSubmitButton: Selector = Selector(refactorLocators.brandingSubmitButtonId);
    brandingCloseButton: Selector = Selector('button').withExactText(refactorLocators.brandingCloseButtonText);
    formNameField: Selector = Selector(refactorLocators.formNameId);
    formEmailField: Selector = Selector(refactorLocators.formEmailId);
    formPhoneField: Selector = Selector(refactorLocators.formPhoneId);
    formSubjectField: Selector = Selector(refactorLocators.formSubjectId);
    formMessageField: Selector = Selector(refactorLocators.formMessageId);
    formSubmitButton: Selector = Selector(refactorLocators.formSubmitButtonId);
    formSubmitNoteArea: Selector = Selector(refactorLocators.formSubmitNoteClass);
    unreadMessage: Selector = Selector(refactorLocators.unreadMessageClass);
};