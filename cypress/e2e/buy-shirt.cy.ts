


 import { LoginPage,Dashboard,ItemPage,AddProductShoppingC,ShoppingcartCheckout,InformationPage,OverviewPage,CheckoutCompletePage} from "../page/index";

 const loginPage = new LoginPage();
 const dashboard = new Dashboard();
 const itemPage = new ItemPage();
 const addProductShoppingC = new AddProductShoppingC();
 const shoppingcartCheckout = new ShoppingcartCheckout();
 const informationPage = new InformationPage();
 const overviewPage = new OverviewPage();
 const checkoutCompletePage = new CheckoutCompletePage();

 describe("Buy a black t-shirt", () => {
   it("then the t-shirt should be bought", () => {
     loginPage.visitLoginPage();
     loginPage.signIn("standard_user", "secret_sauce");
     dashboard.SelectrProduct();
     itemPage.ClickItem();
     addProductShoppingC.addProductToShoppingCart();
     shoppingcartCheckout.ClickcheckoutButton();
     informationPage.IngresarInformacion("standard_user", "secret_sauce", "0000");
     informationPage.ClickContinueButton();
     overviewPage.ClickFinishButton();
     checkoutCompletePage.ValidateOrder();
    });
});
