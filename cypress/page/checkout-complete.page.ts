
export class CheckoutCompletePage {
    private finishButton: string;
    constructor() {
      this.finishButton = "#finish";
    }
    public ValidateOrder(): void {
        cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
            "have.text",
            "Thank you for your order!"
            ); 
    }
}
