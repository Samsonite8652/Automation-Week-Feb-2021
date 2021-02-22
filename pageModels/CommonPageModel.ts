import { Selector } from 'testcafe';
import { commonLocators } from './locators/commonLocators';

export class CommonPageModel {
    // UI Artifact
    usernameField: Selector = Selector(commonLocators.usernameId);
    passwordField: Selector = Selector(commonLocators.passwordId);
    loginButton: Selector = Selector(commonLocators.loginButtonId);
    createButton: Selector = Selector(commonLocators.createButtonId);
};