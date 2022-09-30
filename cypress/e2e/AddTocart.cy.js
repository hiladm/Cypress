/// <reference types="Cypress" />

it('addToCart',()=>{
  let word = 'guitars'
  cy.visit('https://reverb.com/')
  cy.get('.site-search__controls__input').type(word)
  cy.get('.site-search__controls__submit').click()
  //cy.get(':nth-child(1) > .csp-square-card > .csp-square-card__inner').click()
  cy.contains('Stratocaster').click()
  cy.contains('Add to Cart').click()

})