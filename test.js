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
    cy.get('author').type('Nicola')
    cy.get('body').type('Automated testing')

  })
})
