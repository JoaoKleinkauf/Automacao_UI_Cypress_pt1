///<reference types="cypress"/>

const { faker } = require('@faker-js/faker');

context('Funcionalidade de cadastro', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br")
    });
    
    it('Devo me cadastrar com sucesso', () => {
        var emailFaker = faker.internet.email()
        var senhaFaker = faker.internet.password()
        var nomeFaker = faker.internet.userName()
        var sobreFaker = faker.internet.userName()

        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobreFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });



});