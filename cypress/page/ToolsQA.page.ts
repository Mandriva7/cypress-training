import { contains } from "cypress/types/jquery";

export class ToolsQA {
    private demoqaURL : string;
    private nameField: string;
    private lastNameField: string;
    private emailField: string;
    private genderField: string;
    private dateOfBirthField: string;
    private mobileNumberField: string;
    private hobbiesField: string;
    private currentAddressField: string;

    constructor() {
      this.demoqaURL = "https://demoqa.com/automation-practice-form";
      this.nameField = "#firstName";
      this.lastNameField = "#lastName";
      this.emailField = "#userEmail";
      this.genderField = "#genterWrapper > .col-md-9 > :nth-child(2)";
      this.dateOfBirthField = "#dateOfBirthInput";
      this.mobileNumberField = "#userNumber";
      this.hobbiesField = "#col-md-9 col-sm-12 > custom-control custom-checkbox custom-control-inline > .hobbies-checkbox-1";
      this.currentAddressField = "#currentAddress";
    }
    public visitDemoURL(): void {
      cy.visit(this.demoqaURL);
    }
    public FillForm(ObjectData: any): void {
      cy.get(this.nameField).type(ObjectData.name);
      cy.get(this.lastNameField).type(ObjectData.lastName);
      cy.get(this.emailField).type(ObjectData.email);
      cy.get(this.genderField).check().should('be.checked');
      cy.get(this.dateOfBirthField).type(ObjectData.dateOfBirthField);
      cy.get(this.mobileNumberField).type(ObjectData.mobileNumberField);
      cy.get(this.hobbiesField).check().should('be.checked');
      cy.get(this.currentAddressField).type(ObjectData.currentAddressField);
    }
}
