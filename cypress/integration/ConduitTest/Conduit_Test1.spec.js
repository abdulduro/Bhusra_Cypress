///<reference types="Cypress" />

describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('abdulganiyu12@googlemail.com')
        cy.get('input[type="password"]').type('gadone12')
        cy.get('.btn').should('be.visible').contains('Sign in').click() 

    })
})