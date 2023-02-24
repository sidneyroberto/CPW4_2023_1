import React from 'react'
import App from './App'

describe('<App />', () => {
  it('should render correct title', () => {
    cy.mount(<App />)
    cy.get('h1').should('have.text', 'Oi!')
  })
})
