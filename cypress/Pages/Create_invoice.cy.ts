export class Createinvoice{
    clickoninvoice(){
        cy.get(':nth-child(6) > .nav-link').click()
    }
    clickonaddinvoicebutton(){
        cy.get('.table_top_sec > .btn').click()
    }
    selectclientname(){
        cy.get('#companyName').select(1)
    }
    enterservicename(){
        cy.get('#serviceName').type('Service 1')
    }
    enterservicedescription(){
        cy.get('.ql-editor').type('Description of service 1')
    }
    scrollinvoiceform(){
        cy.scrollTo('bottom')
    }
    clickonnextbutton(){
        cy.get('.bottom_main_btn > .btn').click()
    }    
    enterinvoiceamount(){
        cy.get('#billingAmount').type('1520')
    }
    selectbillingtype(){
        cy.get('#billingType').select(3)
    }
    scrollinvoicebillingform(){
        cy.scrollTo('bottom')
    }
    enterbillinghours(){
        cy.get('#perHours').type('20')
    }
    clickonaddmore(){
        cy.get('.sub_heading > h3').click()
    }    
    enterservicename2(){
        cy.get('#serviceName1').type('Service 2')
    }    
    enterservicedescription2(){
        cy.get('.form-outline > .quill > .ql-container > .ql-editor').type('Description of 2nd service')
    }
    scrollinvoicebillingform2(){
        cy.scrollTo('bottom')
    }
    service2billamount(){
        cy.get('#billingAmount1').type('1140')
    }
    servicebilltype2(){
        cy.get('#billingType1').select(3)
    }
    enterbillingdays(){
        cy.get('#perDays1').type('10')
    }
    clicksecondnextbutton(){
        cy.get('#firstInvoiceStep > .bottom_main_btn > .btn').click()
    }
    scrollthepage(){
        cy.scrollTo('bottom')        
    }
    clickonsignbuttom(){
        cy.get('.row > .bottom_main_btn > .btn-primary').click()
    }
    addsignature(){
        cy.get(':nth-child(2) > #signatureName').type('Subodh Chaturvedi')
    }
    clickconfirmsignature(){
        cy.get('.model-footer-btn > .btn').click()
    }
    Sendtheinvoice(){
        cy.get('.row > .bottom_main_btn > .btn-primary').click()
    }
    scrollfinalpage(){
        cy.scrollTo('top')
    }
    clickonfinalsendbutton(){
        cy.get('.row > .bottom_main_btn > .btn-primary').click()
    }
}