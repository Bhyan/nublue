class Header {
  clickCreateAccount() {
    cy.get("div[class='panel header'] > ul a[href$='/create/']").click();
  }

  clickDropdown() {
    cy.get(
      "div[class='panel header'] > ul > li.customer-welcome button"
    ).click();
  }

  clickLogout() {
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a"
    ).click();
  }

  clickLogin() {
    cy.get("div[class='panel header'] > ul a[href*='/login/']").click();
  }

  clickCart() {
    cy.contains(".counter-number", 1, { timeout: 5000 });
    cy.get(".showcart").click();
    cy.contains(".minicart-price .price", "$", { timeout: 5000 });
    cy.get("#top-cart-btn-checkout").click();
  }
}

export default new Header();
