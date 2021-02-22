import { CreateButtonPageModel } from '../pageModels/CreateButtonPageModel';

// Instantiate imports
const createButtonPageModel = new CreateButtonPageModel();

fixture`Easy Challenge`
    .page`https://automationintesting.online/#/admin`;

test(`Assert the 'Create' button exists`, async t => {
    // Log into the Admin page
    await createButtonPageModel.adminLogin()

    // Assert that the 'Create' button appears
    await t.expect(createButtonPageModel.createButton.exists).ok(`The 'Create' button is not appearing`);
});