class EnderecoPage{
    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()

        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)

        cy.get('#select2-shipping_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#shipping_address_1').clear().type(rua)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').clear().type(cidade)
        
        cy.get('#select2-shipping_state-container').type(estado + '{enter}')
        cy.get('#shipping_postcode').clear().type(cep)

        cy.get(':nth-child(2) > .button').click()

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    }

    editarEnderecoEntrega() {

    }
}

export default new EnderecoPage()