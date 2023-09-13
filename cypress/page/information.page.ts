
class InformationPage {
    private firstName: string;
    private lasttName: string;
    private postalCode: string;
    private ContinueButton: string;
    constructor() {
      this.firstName = "#first-name";
      this.lasttName = "#last-name";
      this.postalCode = "#postal-code";
      this.ContinueButton = "#continue";
    }
    public IngresarInformacion(firstName: string, lastName: string, postalCode: string): void {
      cy.get(this.firstName).type(firstName);
      cy.get(this.lasttName).type(lastName);
      cy.get(this.postalCode).type(postalCode);
    }
    public ClickContinueButton(): void {
        cy.get(this.ContinueButton).click;
      }
}
  export { InformationPage };
