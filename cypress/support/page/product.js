import header from "../component/header";

class Product {
  constructor() {
    this.header = header;
  }

  selectSize() {
    cy.wait(4000)
      .get("body")
      .then(($body) => {
        if ($body.find(".swatch-option.text").length) {
          const numberOfSizes = $body.find(".swatch-option.text").length;
          const randomSize = Math.floor(Math.random() * numberOfSizes);

          cy.get(".swatch-option.text").eq(randomSize).click();
        }
      });
  }

  selectColor() {
    cy.get("body").then(($body) => {
      if ($body.find(".swatch-option.color").length) {
        const numberOfColors = $body.find(".swatch-option.color").length;
        const randomColor = Math.floor(Math.random() * numberOfColors);

        cy.get(".swatch-option.color").eq(randomColor).click();
      }
    });
  }

  clickAddToCart() {
    cy.get("#product-addtocart-button").click();
  }

  checkAddToCart() {
    cy.scrollTo(0, 0);
    cy.contains(".message-success > div", "You added");
  }
}

export default new Product();
