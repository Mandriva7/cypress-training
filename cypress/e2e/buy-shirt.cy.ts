
 import { LoginPage } from "../page/index";

 const loginPage = new LoginPage();

 describe("Buy a black t-shirt", () => {
   it("then the t-shirt should be bought", () => {
     loginPage.visitLoginPage();
     loginPage.signIn("standard_user", "secret_sauce");
        cy.get(":nth-child(1) > .inventory_item_description").select;//(3)
        cy.get("[data-test=\"add-to-cart-sauce-labs-bolt-t-shirt\"]").click();//(4)
        cy.get(".shopping_cart_link").click();//(5)
        cy.get("[data-test=\"checkout\"]").click();//(6)
        cy.get("[data-test=\"firstName\"]").type("Cypress"); //(7)
        cy.get("[data-test=\"lastName\"]").type("Workshop"); //(8)
        cy.get("[data-test=\"postalCode\"]").type("00000"); //(9)
        cy.get("[data-test=\"continue\"]").click();//(10)
        cy.get("[data-test=\"finish\"]").click();//(11)
        cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
            "have.text",
            "Thank you for your order!"
       ); //(12)
    });
});
