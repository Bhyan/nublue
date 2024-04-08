const { faker } = require("@faker-js/faker");

export default {
  user: function () {
    var data = {
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: '#Webjump123',
      streetAddress: faker.location.street(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
      phone: faker.phone.number(),
    };

    return data;
  },
};
