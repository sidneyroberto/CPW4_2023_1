describe('Home page tests', () => {
  it('should add a person to list after clicking add button', () => {
    cy.visit('http://127.0.0.1:5500')
    cy.get('#add-person-button').click()
    cy.get('#people-list > :nth-child(1)')
      .invoke('text')
      .then((text) => {
        const wordCount = text.split(' ').length
        expect(wordCount).to.be.at.least(2)
      })
  })
})
