import Header from '.'
import FontStyles from '../../assets/fonts/fonts'

describe('<Header />', () => {
  it('should render correct title', () => {
    const title = 'Exemplo Cypress'
    cy.mount(
      <>
        <FontStyles />
        <Header title={title} />
      </>
    )
    cy.get('[data-cy=header-title]').should('have.text', title)
  })
})
