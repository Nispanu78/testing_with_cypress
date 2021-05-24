describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
    // Find an element in the document containing the text 'Author'
    cy.contains('Author')
    // Find "navbar"
    cy.get('.navbar')
    // Find "form-group"
    cy.get('.form-group')
    // Find the input tag first and type a message
    cy.get('input[type=text]').type('Cypress is fantastic!')
    // Find the textarea second and type a message
    cy.get('textarea[name=body]').type('Happy to use Cypress')
    // Post the message by clicking on the POST button
    cy.contains('POST').click()
    // Visit the webpage where the message is
    cy.visit('http://127.0.0.1:8000/api/v1/10/')
    // Let us clear all field
    cy.get('input[type=text]').clear()
    // Find the textarea second and type a message
    cy.get('textarea[name=body]').clear()
    // Let us update the fields and click PUT
    cy.get('input[type=text]').type('This is not a test but a real post')
    // Find the textarea second and type a message
    cy.get('textarea[name=body]').type('Indeed!')
    cy.contains('PUT').click()
    cy.visit('http://127.0.0.1:8000/api/v1/10/')
    // let us delete the POST
    cy.contains('DELETE').click()


  })
})
