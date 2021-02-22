"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefactorPageModel = void 0;
const testcafe_1 = require("testcafe");
const refactorLocators_1 = require("./locators/refactorLocators");
class RefactorPageModel {
    constructor() {
        // UI artifact
        this.roomsMenu = testcafe_1.Selector(refactorLocators_1.refactorLocators.navBarClass).withExactText(refactorLocators_1.refactorLocators.roomsMenuText);
        this.roomRow = testcafe_1.Selector(refactorLocators_1.refactorLocators.roomRowClass);
        this.roomNumField = testcafe_1.Selector(refactorLocators_1.refactorLocators.roomNumId);
        this.roomPriceField = testcafe_1.Selector(refactorLocators_1.refactorLocators.roomPriceId);
        this.brandingNameField = testcafe_1.Selector(refactorLocators_1.refactorLocators.brandingNameId);
        this.brandingSubmitButton = testcafe_1.Selector(refactorLocators_1.refactorLocators.brandingSubmitButtonId);
        this.brandingCloseButton = testcafe_1.Selector('button').withExactText(refactorLocators_1.refactorLocators.brandingCloseButtonText);
        this.formNameField = testcafe_1.Selector(refactorLocators_1.refactorLocators.formNameId);
        this.formEmailField = testcafe_1.Selector(refactorLocators_1.refactorLocators.formEmailId);
        this.formPhoneField = testcafe_1.Selector(refactorLocators_1.refactorLocators.formPhoneId);
        this.formSubjectField = testcafe_1.Selector(refactorLocators_1.refactorLocators.formSubjectId);
        this.formMessageField = testcafe_1.Selector(refactorLocators_1.refactorLocators.formMessageId);
        this.formSubmitButton = testcafe_1.Selector(refactorLocators_1.refactorLocators.formSubmitButtonId);
        this.formSubmitNoteArea = testcafe_1.Selector(refactorLocators_1.refactorLocators.formSubmitNoteClass);
        this.unreadMessage = testcafe_1.Selector(refactorLocators_1.refactorLocators.unreadMessageClass);
    }
}
exports.RefactorPageModel = RefactorPageModel;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmYWN0b3JQYWdlTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlTW9kZWxzL1JlZmFjdG9yUGFnZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFvQztBQUNwQyxrRUFBK0Q7QUFFL0QsTUFBYSxpQkFBaUI7SUFBOUI7UUFDSSxjQUFjO1FBQ2QsY0FBUyxHQUFhLG1CQUFRLENBQUMsbUNBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxDQUFDLG1DQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNHLFlBQU8sR0FBYSxtQkFBUSxDQUFDLG1DQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELGlCQUFZLEdBQWEsbUJBQVEsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxtQkFBYyxHQUFhLG1CQUFRLENBQUMsbUNBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEUsc0JBQWlCLEdBQWEsbUJBQVEsQ0FBQyxtQ0FBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RSx5QkFBb0IsR0FBYSxtQkFBUSxDQUFDLG1DQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkYsd0JBQW1CLEdBQWEsbUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsbUNBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRyxrQkFBYSxHQUFhLG1CQUFRLENBQUMsbUNBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEUsbUJBQWMsR0FBYSxtQkFBUSxDQUFDLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLG1CQUFjLEdBQWEsbUJBQVEsQ0FBQyxtQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxxQkFBZ0IsR0FBYSxtQkFBUSxDQUFDLG1DQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLHFCQUFnQixHQUFhLG1CQUFRLENBQUMsbUNBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUscUJBQWdCLEdBQWEsbUJBQVEsQ0FBQyxtQ0FBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNFLHVCQUFrQixHQUFhLG1CQUFRLENBQUMsbUNBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5RSxrQkFBYSxHQUFhLG1CQUFRLENBQUMsbUNBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQUE7QUFqQkQsOENBaUJDO0FBQUEsQ0FBQyJ9