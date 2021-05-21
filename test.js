describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
    // Find an element in the document containing the text 'New Post'
    cy.contains('Author')

    // Find "navbar"
    cy.get('.navbar')
    // Find "form-group"
    cy.get('.form-group')
    // Find "control-label" which contains the text 'Author'
    // cy.contains('title').type('Automatic Testing')
    cy.get('input[type=text]').type('Cypress rules')
    cy.get('textarea[name=body]').type('Happy to use Cypress')
    cy.contains('POST').click()

  })
})
