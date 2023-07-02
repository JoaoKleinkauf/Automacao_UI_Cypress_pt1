///<reference types='cypress'/>

describe('Funcionalidade Endereço - Faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario,dados.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        // cadastro de endereço
    });
    
});