import home from "../support/page/home";
import product from "../support/page/product";
import userFactory from "../factories/userFactory";
import checkout from "../support/page/checkout";

describe("Product", () => {
  it("add a random product to cart", function () {
    home.go();
    home.clickRandomShelf();

    product.selectSize();
    product.selectColor();
    product.clickAddToCart();
    product.checkAddToCart();
  });

  it.only("buy a random product", function () {
    const newUser = userFactory.user();
    cy.createUser(newUser);

    home.go();
    home.clickRandomShelf();

    product.selectSize();
    product.selectColor();
    product.clickAddToCart();
    product.checkAddToCart();
    product.header.clickCart();

    checkout.checkPage();
    checkout.fillForm(newUser);
    checkout.finishOrder();
    checkout.checkFinishedOrderPage();
  });
});
