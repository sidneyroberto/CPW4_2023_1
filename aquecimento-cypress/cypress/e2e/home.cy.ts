describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should add a person to list after clicking add button', () => {
    cy.get('#add-person-button').click()
    cy.get('#people-list > :nth-child(1)')
      .invoke('text')
      .then((text) => {
        const wordCount = text.split(' ').length
        expect(wordCount).to.be.at.least(2)
      })
  })

  it('should add n people to list after n clicks to add person button', () => {
    const n = 10
    cy.addNPeople(n)
    cy.get('#people-list').find('li').should('have.length', n)
  })

  it('should clear list after clicking clear button', () => {
    cy.addNPeople(10)
    cy.get('#clear-list-button').click()
    cy.get('#people-list').find('li').should('have.length', 0)
  })
})
