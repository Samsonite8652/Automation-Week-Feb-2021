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
const CommonPageModel_1 = require("./CommonPageModel");
const createButtonlocators_1 = require("./locators/createButtonlocators");
const data_1 = require("./data/data");
// Instatiate imports
const common = new CommonPageModel_1.CommonPageModel();
class CreateButtonPageModel {
    constructor() {
        // UI artifact
        this.createButton = testcafe_1.Selector(createButtonlocators_1.createButtonLocators.createButtonId);
    }
    // Method to log into the Admin page using a username and password
    adminLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield testcafe_1.t
                .typeText(common.usernameField, data_1.data.username)
                .typeText(common.passwordField, data_1.data.password)
                .click(common.loginButton);
        });
    }
    ;
}
exports.CreateButtonPageModel = CreateButtonPageModel;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQnV0dG9uUGFnZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU1vZGVscy9DcmVhdGVCdXR0b25QYWdlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLHVEQUFvRDtBQUNwRCwwRUFBdUU7QUFDdkUsc0NBQW1DO0FBRW5DLHFCQUFxQjtBQUNyQixNQUFNLE1BQU0sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUVyQyxNQUFhLHFCQUFxQjtJQUFsQztRQUNJLGNBQWM7UUFDZCxpQkFBWSxHQUFhLG1CQUFRLENBQUMsMkNBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7SUFTM0UsQ0FBQztJQVBHLGtFQUFrRTtJQUM1RCxVQUFVOztZQUNaLE1BQU0sWUFBQztpQkFDRixRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFJLENBQUMsUUFBUSxDQUFDO2lCQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFJLENBQUMsUUFBUSxDQUFDO2lCQUM3QyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUFBLENBQUM7Q0FDTDtBQVhELHNEQVdDO0FBQUEsQ0FBQyJ9