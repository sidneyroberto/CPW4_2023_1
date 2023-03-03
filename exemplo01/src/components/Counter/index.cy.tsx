import Counter from '.'
import FontStyles from '../../assets/fonts/fonts'

describe('<Counter />', () => {
  it('should render correct value', () => {
    const value = 21
    cy.mount(
      <>
        <FontStyles />
        <Counter value={value} />
      </>
    )

    const counterValue = cy.get('[data-cy="counter-value"]')
    counterValue.should('have.text', value)
    counterValue.should('have.css', 'color', 'rgb(255, 255, 255)')
    counterValue.should('have.css', 'font-family', 'regular')
    counterValue.should('have.css', 'font-size', '32px')
  })
})
