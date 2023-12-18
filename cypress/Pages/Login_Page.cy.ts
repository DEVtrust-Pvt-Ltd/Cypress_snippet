import {randomEmailid} from "./Registration_Page.cy"
export const loginEmail= randomEmailid

export class LoginPage {
    
    navigate(){
        cy.visit('https://infinitymediala.devtrust.biz/')
    }
    enterusername(){
        cy.randomEmail (loginEmail)
    }
    enterpassword(){
        cy.loginpassword('Test@1234')
    }
    clicklogin(){
        cy.get('.form_aria > .btn').click()
    }
    clicklogout(){
        cy.get(':nth-child(9) > .nav-link > span').click()
    }

}
