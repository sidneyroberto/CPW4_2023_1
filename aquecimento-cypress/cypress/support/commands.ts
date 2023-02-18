/// <reference types="cypress" />

Cypress.Commands.add('addNPeople', (n: number) => {
  for (let i = 0; i < n; i++) {
    cy.get('#add-person-button').click()
  }
})
