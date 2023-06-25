class Base_PO {
  navigate(path) {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseUrl + path);
    });
  }

  // method example
  getPageTitle() {
    return cy.title();
  }
}

export default Base_PO;
