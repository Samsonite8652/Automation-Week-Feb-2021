import { Selector, t } from 'testcafe';
import { CommonPageModel } from './CommonPageModel';
import { createButtonLocators } from './locators/createButtonlocators';
import { data } from './data/data';

// Instatiate imports
const common = new CommonPageModel();

export class CreateButtonPageModel {
    // UI artifact
    createButton: Selector = Selector(createButtonLocators.createButtonId);

    // Method to log into the Admin page using a username and password
    async adminLogin() {
        await t
            .typeText(common.usernameField, data.username)
            .typeText(common.passwordField, data.password)
            .click(common.loginButton);
    };
};