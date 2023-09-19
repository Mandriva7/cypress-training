
export class AddProductShoppingC {
    private addToShoppingCart: string;
    private shoppingCartLink: string;
    constructor() {
      this.addToShoppingCart = "#add-to-cart-sauce-labs-bolt-t-shirt";
      this.shoppingCartLink = ".shopping_cart_link";
    }
    public addProductToShoppingCart(): void {
      cy.get(this.addToShoppingCart).click;
      cy.get(this.shoppingCartLink).click;
    }
}

