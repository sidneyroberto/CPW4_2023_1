describe('Authentication App e2e tests', () => {
  beforeEach(() => {
    cy.fixture('context').then((value) => {
      const { token, profilePic, userName } = value
      window.localStorage.setItem('token', token)
      window.localStorage.setItem('profilePic', profilePic)
      window.localStorage.setItem('userName', userName)
    })

    cy.visit('')
  })

  it('should render home page', () => {})
})
