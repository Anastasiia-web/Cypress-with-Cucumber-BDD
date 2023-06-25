import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
  navigateToHomepage() {
    super.navigate("");
  }

  clickOn_ContactUs_Button() {
    cy.clickAndOpenLink_inSameTab("#contact-us");
  }

  clickOn_LoginPortal_Button() {
    cy.clickAndOpenLink_inSameTab("#login-portal");
  }
}

export default Homepage_PO;
