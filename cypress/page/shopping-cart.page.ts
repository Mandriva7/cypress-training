
export class ShoppingcartCheckout {
    private CheckoutButton: string;
    constructor() {
      this.CheckoutButton = "#checkout";
    }
    public ClickcheckoutButton(): void {
      cy.get(this.CheckoutButton).click();
    }
}
