import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  elements = {
    username_textField: () => cy.get("#text"),
    password_textField: () => cy.get("#password"),
    login_button: () => cy.get("#login-button"),
  };

  navigateTo_Login_Page() {
    super.navigate("/Login-Portal/index.html");
  }

  type_Username(username) {
    this.elements.username_textField().type(username);
  }

  type_Password(password) {
    this.elements.password_textField().type(password);
  }

  clickOn_Login_Button() {
    this.elements.login_button().click();
  }
}

export default Login_PO;
