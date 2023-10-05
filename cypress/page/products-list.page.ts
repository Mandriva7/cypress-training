import { contains } from "cypress/types/jquery";

export class AddProductShoppingC {
    private addToShoppingCart: string;
    private shoppingCartLink: string;
    private productsListed: string;
   

    constructor() {
      this.addToShoppingCart = "Sauce Labs Bike Light";
      this.shoppingCartLink = ".shopping_cart_link";
      this.productsListed = ".inventory_item_name";
     
    }
    public findProductByName(): void {
      cy.get(this.productsListed).contains(this.addToShoppingCart).click();
    }
    public addProductToShoppingCart(): void {
      cy.contains(/Add to cart/).click();
      cy.get(this.shoppingCartLink).click();
    }
}
