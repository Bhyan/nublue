import home from '../support/page/home'
import createUser from '../support/page/createUser'
import userFactory from '../factories/userFactory'
import account from '../support/page/account'
import logout from '../support/page/logout'
import login from '../support/page/login'

describe("User", () => {
  it("create new user", function () {
    home.go()
    home.header.clickCreateAccount()

    createUser.checkPage()
    const newUser = userFactory.user();
    createUser.fillFormCreateUser(newUser)

    account.checkPage()
  });
  
  it("login", function () {
    home.go()
    home.header.clickCreateAccount()

    createUser.checkPage()
    const newUser = userFactory.user();
    createUser.fillFormCreateUser(newUser)

    account.checkPage()
    account.header.clickDropdown()
    account.header.clickLogout()

    logout.checkPage()
    logout.header.clickLogin()

    login.fillForm(newUser)
    
    account.checkEmail(newUser)
  });
});
