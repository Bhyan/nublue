class CreateUser {
  go() {
    cy.visit("/customer/account/create/")
  }

  checkPage() {
    cy.contains(".base", "Create New Customer Account");
  }

  fillFormCreateUser(user) {
    cy.get("#firstname").clear().type(user.name);
    cy.get("#lastname").clear().type(user.lastName);
    cy.get("#email_address").clear().type(user.email);
    cy.get("#password").clear().type(user.password);
    cy.get("#password-confirmation").clear().type(user.password);

    cy.contains('button[type="submit"]', "Create an Account").click();
  }
}

export default new CreateUser();
