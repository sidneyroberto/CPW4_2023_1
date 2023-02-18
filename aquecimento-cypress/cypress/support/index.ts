declare namespace Cypress {
  interface Chainable {
    /**
     * Add n people to people list
     * @param n amount of people
     */
    addNPeople(n: number): Chainable<Element>
  }
}
