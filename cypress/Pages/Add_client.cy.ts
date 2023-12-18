import {randomEmailid} from "./Registration_Page.cy"
export class Addclient {
    

    clickonclient(){
        cy.get(':nth-child(4) > .nav-link > span').click()
    }
    clickaddbuton(){
        cy.get('.table_top_sec > .btn').click()
    }
    enterclientname(){
        cy.get('#clientName').type('Hello')
    }
    clickonnext(){
        cy.get('.bottom_main_btn > .btn').click()
    }
    entercontracttname(){
        cy.get('#contactName').type('TestContract')
    }
    secondnextbutton(){
        cy.get('.bottom_main_btn > .btn-primary').click()
    }
    enterclientemail(){
        cy.get('#clientEmail').type(randomEmailid)
    }
    thirdnextbutton(){
        cy.get('.bottom_main_btn > .btn-primary').click()
    }
    enterclientphone(){
        const random = Math.random().toString().substr(2, 10) //Used for creating a random '10' digit mobile number.
        cy.get('#clientPhone').type(random)
    }
    fourthnextbutton(){
        cy.get('.bottom_main_btn > .btn-primary').click()
    }
    scrolltobottom(){
        cy.scrollTo('bottom')
    }    
    enterclientaddress(){
        cy.get('#address').type('CP-6 devtrust Vikrant Khand')
    }
    enterclientcity(){
        cy.get('#city').type('lucknow')
    }
    enterclientzipcode(){
        cy.get('#zipcode').type('74125')
    }
    enterclientcountry(){
        cy.get('#country').select(14)
    }
    enterclientstate(){
        cy.get('#state').type('Uttar Pradesh')
    }
    clicksubmitbutton(){
        cy.get('.bottom_main_btn > .btn-primary').click()

}
}