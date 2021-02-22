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
exports.CreateButtonPageModel = void 0;
const testcafe_1 = require("testcafe");
const createButtonlocators_1 = require("./locators/createButtonlocators");
const data_1 = require("./data/data");
class CreateButtonPageModel {
    constructor() {
        this.usernameField = testcafe_1.Selector(createButtonlocators_1.createButtonLocators.usernameId);
        this.passwordField = testcafe_1.Selector(createButtonlocators_1.createButtonLocators.passwordId);
        this.loginButton = testcafe_1.Selector(createButtonlocators_1.createButtonLocators.loginButtonId);
        this.createButton = testcafe_1.Selector(createButtonlocators_1.createButtonLocators.createButtonId);
    }
    // Log into the Admin page using a username and password
    adminLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield testcafe_1.t
                .typeText(this.usernameField, data_1.data.username)
                .typeText(this.passwordField, data_1.data.password)
                .click(this.loginButton);
        });
    }
    ;
}
exports.CreateButtonPageModel = CreateButtonPageModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQnV0dG9uUGFnZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU1vZGVscy9DcmVhdGVCdXR0b25QYWdlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLDBFQUF1RTtBQUN2RSxzQ0FBbUM7QUFJbkMsTUFBYSxxQkFBcUI7SUFBbEM7UUFDSSxrQkFBYSxHQUFhLG1CQUFRLENBQUMsMkNBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEUsa0JBQWEsR0FBYSxtQkFBUSxDQUFDLDJDQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLGdCQUFXLEdBQWEsbUJBQVEsQ0FBQywyQ0FBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRSxpQkFBWSxHQUFhLG1CQUFRLENBQUMsMkNBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7SUFTM0UsQ0FBQztJQVBHLHdEQUF3RDtJQUNsRCxVQUFVOztZQUNaLE1BQU0sWUFBQztpQkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFJLENBQUMsUUFBUSxDQUFFO2lCQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFJLENBQUMsUUFBUSxDQUFDO2lCQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUFBLENBQUM7Q0FDTDtBQWJELHNEQWFDIn0=