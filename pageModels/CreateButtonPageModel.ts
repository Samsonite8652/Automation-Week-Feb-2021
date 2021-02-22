import { Selector, t } from 'testcafe';
import { createButtonLocators } from './locators/createButtonlocators';
import { data } from './data/data';



export class CreateButtonPageModel {
    usernameField: Selector = Selector(createButtonLocators.usernameId);
    passwordField: Selector = Selector(createButtonLocators.passwordId);
    loginButton: Selector = Selector(createButtonLocators.loginButtonId);
    createButton: Selector = Selector(createButtonLocators.createButtonId);

    // Log into the Admin page using a username and password
    async adminLogin() {
        await t
            .typeText(this.usernameField, data.username)
            .typeText(this.passwordField, data.password)
            .click(this.loginButton);
    };
}