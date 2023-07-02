///<reference types="cypress"/>

context('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
    });

    it('Deve selecionar e adicionar no carrinho', () => {
        var quant = 2

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quant)
    });
   
    it('Deve add produto usando comandos customizados', () => {
        cy.addProduto('Abominable Hoodie', 'M', 'Red', 3)    
    });
   
});