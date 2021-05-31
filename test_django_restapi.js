describe('The Home Page', () =>{
  beforeEach(() => {
    // it visits the following URL: http://127.0.0.1:8000/api/v1/
     cy.visit('/')
   })
   it('loads', () => {
   })
   it('then executes the following commands', () => {
         cy.contains('Author')
         // Find "navbar"
         cy.get('.navbar')
         // Find "form-group"
         cy.get('.form-group')
         // Find the input tag first and type a message
         cy.get('input[type=text]').type('I love Cypress!')
         // Find the textarea tag second and type a message
         cy.get('textarea[name=body]').type('I really love it!')
         // Check that the POST button is visible
         cy.get('button').contains('POST').should('be.visible')
         // Post the message by clicking on the POST button
         cy.get('button').contains('POST').click()
         // Visit the webpage where the message is
         cy.visit('http://127.0.0.1:8000/api/v1/35/')
         // Clear input field
         cy.get('input[type=text]').clear()
         // Clear textarea field
         cy.get('textarea[name=body]').clear()
         // Update the input field
         cy.get('input[type=text]').type('But it is a sunny day')
         // Update the textarea field
         cy.get('textarea[name=body]').type('And I would like to spend my day outside')
         // Update the post by clicking on PUT
         cy.get('button').contains('PUT').click()
         // Visit updated page
         cy.visit('http://127.0.0.1:8000/api/v1/35/')
         // DELETE the post
         cy.get('button').contains('DELETE').click()
         cy.get('form').contains('Delete').click()


   })

})
