export const randomEmailid= Math.random().toString(36).substr(2, 15)+"@yopmail.com"

export class Registration {

    navigate(){
        cy.visit('https://infinitymediala.devtrust.biz/register')
    }
    enterusername(){
        cy.get('#fullName', {timeout:10000}).type('Triruchitrambalam')
    }
    enteruseremail(){
        
        cy.randomEmail (randomEmailid) //Type unique email ID everytime.
    }
    enterpassword(){
        cy.Registerpassword('Test@1234')
    }
    clicksubmit(){
        cy.get('.form_aria > .btn', {timeout:10000}).click()
    }

}