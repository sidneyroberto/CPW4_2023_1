describe('English Dictionary E2E tests', () => {
  beforeEach(() => {
    cy.visit('')
    cy.fixture('apiResponse').then((value) => (this.apiResponse = value))
  })

  it('should render correct number of word cards when search is performed', () => {
    const query = 'blablabla'
    cy.intercept('GET', `${Cypress.env('API_URL')}/${query}`, {
      body: this.apiResponse,
    })

    cy.performSearch(query)

    cy.get('[data-cy="word-card"]').should(
      'have.length',
      this.apiResponse.length
    )
  })
})
