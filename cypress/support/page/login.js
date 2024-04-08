class Login {
    fillForm(user) {
        cy.get('#email').clear().type(user.email)
        cy.get('#pass').clear().type(user.password)
        cy.get('#send2').click()
    }
}

export default new Login();