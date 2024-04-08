import header from "../component/header";

class Logout {
  constructor() {
    this.header = header;
  }

  checkPage() {
    cy.contains(".base", "You are signed out");
  }
}

export default new Logout();
