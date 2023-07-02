///<reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br")
    });
    
    it('Deve concluir o login com sucesso', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Aluno ')
    });

    it('Deve concluir o login com sucesso - usando arquivo de dados', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Aluno ')
    });

    it('Deve concluir o login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Aluno ') 
    })
        
    });

    it('Deve exibir uma msg de erro ao iserir usuario inválidos', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno-eb4c@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido')
    });
    
    it('Deve exibir uma msg de erro ao iserir senha inválidos', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testE@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Erro: a senha fornecida')
    });
});