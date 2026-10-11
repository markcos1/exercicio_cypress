///  <reference types="cypress" />

describe('Testes para o site', () => {

    beforeEach(() => {
        cy.visit(('https://ebac-agenda-contatos-tan.vercel.app/'))
    })
    

    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Marcos Paulo')
        cy.get('[type="email"]').type('934marcos.ferreira@gmail.com')
        cy.get('[type="tel"]').type('11999999999')
        cy.get('.adicionar').click()

        cy.contains('Marcos Paulo').should('be.visible')
        cy.contains('934marcos.ferreira@gmail.com').should('be.visible')
        cy.contains('11999999999').should('be.visible')
        
    })

    it('Deve editar um contato', () => {
        cy.get('[type="text"]').type('Marcos Paulo')
        cy.get('[type="email"]').type('934marcos.ferreira@gmail.com')
        cy.get('[type="tel"]').type('11999999999')
        cy.get('.adicionar').click()

        cy.contains('.contato', 'Marcos Paulo').find('.edit').click()

        cy.get('[type="text"]').clear().type('João da Silva')
        cy.get('[type="email"]').clear().type('934john.silva@gmail.com')
        cy.get('[type="tel"]').clear().type('11999999999')
        cy.get('.alterar').should('be.visible').click()

        cy.contains('João da Silva').should('be.visible')
        cy.contains('934john.silva@gmail.com').should('be.visible')
        cy.contains('11999999999').should('be.visible')
    })
    
    it('Deve remover um contato ', () => {
        cy.get('[type="text"]').type('Victor Hugo')
        cy.get('[type="email"]').type('99victor.hugo@gmail.com')
        cy.get('[type="tel"]').type('1177777777')
        cy.get('.adicionar').click()

        cy.contains('.contato', 'Victor Hugo').find('.delete').click()
        cy.contains('Victor Hugo').should('not.exist')
        
    })
    










})