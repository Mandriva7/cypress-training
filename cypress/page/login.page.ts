class LoginPage {
    private loginURL: string;
    private userNameField: string;
    private passwordField: string;
    private loginButton: string;
    constructor() {
      this.loginURL = "http://saucedemo.com/";
      this.userNameField = ".login-box > form > div > input#user-name";
      this.passwordField = ".login-box > form > div > input#password";
      this.loginButton = "input[type='submit']";
    }
    public visitLoginPage(): void {
      cy.visit(this.loginURL);
    }
    public signIn(userName: string, password: string): void {
      cy.get(this.userNameField).type(userName);
      cy.get(this.passwordField).type(password);
      cy.get(this.loginButton).click();
    }
  }
  export { LoginPage };
