
 import { LoginPage } from "../page/login.page";
 import { Index } from "../page/index";
 import { ItemPage } from "../page/item.page";
 import { AddProductShoppingC } from "../page/products-list.page";
 import { ShoppingcartCheckout } from "../page/shopping-cart.page";
 

 const loginPage = new LoginPage();
 const index = new Index();
 const itemPage = new ItemPage();
 const addProductShoppingC = new AddProductShoppingC();
 const shoppingcartCheckout = new ShoppingcartCheckout();

 describe("Buy a black t-shirt", () => {
   it("then the t-shirt should be bought", () => {
     loginPage.visitLoginPage();
     loginPage.signIn("standard_user", "secret_sauce");
     index.SelectrProduct();
     itemPage.ClickItem();
     addProductShoppingC.addProductToShoppingCart();
        cy.get("#checkout").click();//(6)
        cy.get("#first-name").type("Cypress"); //(7)
        cy.get("#last-name").type("Workshop"); //(8)
        cy.get("#postal-code").type("00000"); //(9)
        cy.get("#continue").click();//(10)
        cy.get("#finish").click();//(11)
        cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
            "have.text",
            "Thank you for your order!"
       ); //(12)
    });
});
