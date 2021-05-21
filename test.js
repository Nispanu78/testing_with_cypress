describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
    // Find an element in the document containing the text 'New Post'
    cy.contains('Author')

    // Find '.label'
    cy.get('.navbar')
    cy.get('.form-group')
    cy.get('.control-label').contains('Author')
  })
})
