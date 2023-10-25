import { contains } from "cypress/types/jquery";
export class ToolsQA {
    private demoqaURL : string;
    private nameField: string;
    private lastNameField: string;
    private emailField: string;
    private genderField: string;
    private dateOfBirthField: string;
    private mobileNumberField: string;
    private hobbiesFieldOne: string;
    private hobbiesFieldTwo: string;
    private currentAddressField: string;


    private DatePicketMonthSelected : string;
    private DatePicketYearSelected : string;
    private DatePicketDaySelected : string;

    private DroDownListState : string;
    private DroDownListStateOption : string;
    private DroDownListCity : string;
    private DroDownListCityOption : string;

    private SubmitButton : string;
    
    private Table : string;
    

    constructor() {
      this.demoqaURL = "https://demoqa.com/automation-practice-form";
      this.nameField = "#firstName";
      this.lastNameField = "#lastName";
      this.emailField = "#userEmail";
      this.genderField = "[value='Male']";
      this.dateOfBirthField = "#dateOfBirthInput";


      this.DatePicketMonthSelected = ".react-datepicker__month-select"
      this.DatePicketYearSelected = ".react-datepicker__year-select"
      this.DatePicketDaySelected = ".react-datepicker__day--018"

      this.mobileNumberField = "#userNumber";

      this.hobbiesFieldOne = "[value='2']";
      this.hobbiesFieldTwo = "[value='3']";

      this.currentAddressField = "#currentAddress";

      this.DroDownListState = "#state";
      this.DroDownListStateOption = "#react-select-3-option-2";
      this.DroDownListCity = "#city"; 
      this.DroDownListCityOption = "#react-select-4-option-0";

      this.SubmitButton = "#submit";

      this.Table = "#table table-dark table-striped table-bordered table-hover";
    }
    public visitDemoURL(): void {
      cy.visit(this.demoqaURL);
    }
    public FillForm(ObjectData: any): void {
      cy.get(this.nameField).type(ObjectData.name);
      cy.get(this.lastNameField).type(ObjectData.lastName);
      cy.get(this.emailField).type(ObjectData.email);
      cy.get(this.genderField).check({force:true});
      //type(ObjectData.dateOfBirth);
      cy.get(this.dateOfBirthField).click();
      cy.get(this.DatePicketMonthSelected).select(1);
      cy.get(this.DatePicketYearSelected).select("1991");
      cy.get(this.DatePicketDaySelected).click();

      cy.get(this.mobileNumberField).type(ObjectData.mobileNumber);

      cy.get(this.hobbiesFieldOne).check({force:true});
      cy.get(this.hobbiesFieldTwo).check({force:true});

      cy.get(this.currentAddressField).type(ObjectData.currentAddress);

      cy.get(this.DroDownListState).click();
      cy.get(this.DroDownListStateOption).click();
      cy.get(this.DroDownListCity).click();
      cy.get(this.DroDownListCityOption).click();

      cy.get(this.SubmitButton).click();

      cy.get(this.Table).getTable()
    }

    public validateTableData(): void {
      cy
    }
}
