/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


// -- Email command for Login--
Cypress.Commands.add('email', (emailid) =>{
    cy.visit('https://infinitymediala.devtrust.biz/')
    cy.get('#userEmail').type(emailid)
})

// -- Password command for Login --
Cypress.Commands.add('loginpassword', (passwordid) =>{
    cy.get('#exampleInputPassword1').type(passwordid)

})

// -- Password command for Registration --
Cypress.Commands.add('Registerpassword', (passwordid) =>{
    cy.get('#userPassword').type(passwordid)

})

// -- Create random email
const randomEmailid= Math.random().toString(36).substr(2, 15)+"@yopmail.com"
Cypress.Commands.add ('randomEmail', (randomemailid) => {
    cy.get('#userEmail').type(randomemailid)

})
//  -- Declaration of command methods--
declare namespace Cypress{
interface Chainable{
    email(emailid: string): Chainable<void>
    loginpassword(passwordid: string): Chainable<void>
    Registerpassword(passwordid: string): Chainable<void>
    randomEmail(randomemailid: string): Chainable<void>
    randomphone(random: string): Chainable<void>

}} 



