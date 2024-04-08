import header from "../component/header";

class Account {
  constructor() {
    this.header = header;
  }

  checkPage() {
    cy.contains(
      "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']",
      "Thank you for registering with Main Website Store."
    );
  }

  checkEmail(user) {
    cy.contains("p", user.email);
  }
}

export default new Account();
