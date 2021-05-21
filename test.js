describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
    // Find an element in the document containing the text 'New Post'
    cy.contains('Author')

    // Find an element within '.main' containing the text 'New Post'
    cy.get('.form').contains('Author')
  })
})
