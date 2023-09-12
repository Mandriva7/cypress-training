
 import { LoginPage } from "../page/index";

 const loginPage = new LoginPage();

 describe("Buy a black t-shirt", () => {
   it("then the t-shirt should be bought", () => {
     loginPage.visitLoginPage();
     loginPage.signIn("standard_user", "secret_sauce");
        cy.get("#item_1_title_link > .inventory_item_name").select;//(3)
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();//(4)
        cy.get(".shopping_cart_link").click();//(5)
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
