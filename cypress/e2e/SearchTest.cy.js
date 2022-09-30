/// <reference types="Cypress" />

it('search an article',()=>{
  let word = 'guitars'
  cy.visit('https://reverb.com/')
  cy.get('.site-search__controls__input').type(word)
  cy.get('.site-search__controls__submit').click()
})