
export class OverviewPage {
    private finishButton: string;
  
    constructor() {
      this.finishButton = "#finish";
   
    }
    public ClickFinishButton(): void {
      cy.get(this.finishButton).click();
    }
}
