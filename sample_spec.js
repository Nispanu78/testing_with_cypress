// My first Cypress test

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })
//
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// Visit a page
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.pause()
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
