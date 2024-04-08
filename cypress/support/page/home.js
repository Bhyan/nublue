import header from "../component/header";

class Home {
  constructor() {
    this.header = header;
  }

  go() {
    cy.visit("/", { failOnStatusCode: false });
  }

  clickRandomShelf() {
    const numberOfShelves = 7;
    const randomShelf = Math.floor(Math.random() * numberOfShelves);

    cy.get(".product-item").eq(randomShelf).click();
  }
}

export default new Home();
