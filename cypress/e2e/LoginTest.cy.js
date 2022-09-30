/// <reference types="Cypress" />

it('login funtionality',()=>{
  let email = 'locura.cr123@gmail.com'
  let pass = 'locura123'
  cy.visit('https://reverb.com/')
  cy.get(':nth-child(6) > .reverb-header__nav__link').click()
  cy.get('#signin--login').type(email)
  cy.get('#signin--password').type(pass)
  cy.get('.scaling-mtb-2 > .button').click()
})