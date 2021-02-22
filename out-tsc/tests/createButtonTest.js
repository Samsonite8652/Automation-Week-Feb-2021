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
const CreateButtonPageModel_1 = require("../pageModels/CreateButtonPageModel");
// Instantiate imports
const createButtonPageModel = new CreateButtonPageModel_1.CreateButtonPageModel();
fixture `Easy Challenge`
    .page `https://automationintesting.online/#/admin`;
test(`Assert the 'Create' button exists`, (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Log into the Admin page
    yield createButtonPageModel.adminLogin();
    // Assert that the 'Create' button appears
    yield t.expect(createButtonPageModel.createButton.exists).ok(`The 'Create' button is not appearing`);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQnV0dG9uVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL2NyZWF0ZUJ1dHRvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrRUFBNEU7QUFFNUUsc0JBQXNCO0FBQ3RCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSw2Q0FBcUIsRUFBRSxDQUFDO0FBRTFELE9BQU8sQ0FBQSxnQkFBZ0I7S0FDbEIsSUFBSSxDQUFDLDRDQUE0QyxDQUFDO0FBRXZELElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxDQUFNLENBQUMsRUFBQyxFQUFFO0lBQ2hELDBCQUEwQjtJQUMxQixNQUFNLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFBO0lBRXhDLDBDQUEwQztJQUMxQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQ3pHLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==