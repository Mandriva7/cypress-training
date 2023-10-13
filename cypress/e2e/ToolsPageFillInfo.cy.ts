
import { ToolsQA } from "../page/ToolsQA.page";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

const toolsQA = new ToolsQA();
const personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "test@email.com",
    gender: "Male",
    dateOfBirth: "27 Jul 2016",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
  };
  describe("Fill out information from the site", () => {
    it("then the site info must be filled", () => {
      toolsQA.visitDemoURL();
      toolsQA.FillForm(personalInformation);
     });
 });
