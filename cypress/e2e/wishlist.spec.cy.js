///<reference types='cypress'/>

context('Funcionalidade de Wishlist', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });
    
    it('Deve adicionar na Wishlist', () => {

        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2) > span').click()
        cy.get(':nth-child(2) > .text-skin > .count_wishlist').should('contain' , 1)

    });
    
    it('Deve remover da Wishlist', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get(':nth-child(2) > .text-skin > .fa').click()
        cy.get('.remove > .fa').click()
        cy.get('.woocommerce-message').should('contain' , 'Produto removida com sucesso.')
    });
});