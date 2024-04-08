class Checkout {
  checkPage() {
    cy.contains("#shipping > .step-title", "Shipping Address", {
      timeout: 50000,
    });
  }

  fillForm(user) {
    cy.get("input[name='street[0]']", {
      timeout: 50000,
    }).type(user.streetAddress);

    const randomState = Math.floor(Math.random() * 65);
    cy.get("select[name='region_id']").select(randomState);

    cy.get("input[name='city']").type(user.city);
    cy.get("input[name='postcode']").type(user.zipCode);
    cy.get("input[name='telephone']").type(user.phone);
    cy.get('input[name="ko_unique_1"]').check();

    cy.contains("span", "Next").click();
  }

  finishOrder() {
    cy.contains("span", "Place Order").click();
  }

  checkFinishedOrderPage() {
    cy.contains(".base", "Thank you for your purchase!");
  }
}

export default new Checkout();
