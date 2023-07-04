///<reference types='cypress'/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadoEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereço - Faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario,dados.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Carla', 'Dick', 'CasaVet', 'Brasil', 'Maua', '100', 'Novo Hamburgo', 'Rio Grande do Sul', '12345678')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadoEndereco[1].nome,
            dadoEndereco[1].sobrenome,
            dadoEndereco[1].empresa,
            dadoEndereco[1].pais,
            dadoEndereco[1].endereco,
            dadoEndereco[1].numero,
            dadoEndereco[1].cidade,
            dadoEndereco[1].estado,
            dadoEndereco[1].ceps
            )
    });

});