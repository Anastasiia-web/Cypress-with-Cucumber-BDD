import Base_PO from "./Base_PO";

class ContactUs_PO extends Base_PO {
  elements = {
    comment_textField: () => cy.get('textarea[name="message"]'),
    firstName_textField: () => cy.get('[name="first_name"]'),
    lastName_textField: () => cy.get('[name="last_name"]'),
    email_textField: () => cy.get('[name="email"]'),
    submit_button: () => cy.get('[type="submit"]'),
    header: () => cy.get("h1"),
    body: () => cy.get("body"),
    // or
    submission_text: () => cy.xpath("//h1 | //body"),
  };

  navigateTo_Login_Page() {
    super.navigate("/Contact-Us/contactus.html");
  }

  type_Firstname() {
    this.elements.firstName_textField().type("An");
  }

  type_Lastname() {
    this.elements.lastName_textField().type("Iva");
  }

  type_email() {
    this.elements.email_textField().type("a@mail.com");
  }

  type_comment() {
    this.elements.comment_textField().type("Test comment");
  }

  clickOn_Submit_Button() {
    this.elements.submit_button().click();
  }

  assertion_SuccessfulMessage() {
    this.elements.header().should("have.text", "Thank You for your Message!");
  }

  assertion_UnsuccessfulMessage() {
    this.elements.body().contains("Error: Invalid email address");
  }

  type_Firstname_lastname(firstName, lastName) {
    this.elements.firstName_textField().type(firstName);
    this.elements.lastName_textField().type(lastName);
  }

  type_email_comment(email, comment) {
    this.elements.email_textField().type(email);
    this.elements.comment_textField().type(comment);
  }

  validate_SuccessfulMessage() {
    this.elements.header().should("have.text", "Thank You for your Message!");
  }

  validate_UnsuccessfulMessage() {
    this.elements.body().contains("Error: Invalid email address");
  }

  validate_OutlineScenarioSuccessfulMessage(message) {
    this.elements.submission_text().contains(message);
  }
}

export default ContactUs_PO;
