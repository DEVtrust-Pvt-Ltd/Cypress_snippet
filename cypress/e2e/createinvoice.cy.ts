import { create } from "cypress/types/lodash";
import { Createinvoice } from "../Pages/Create_invoice.cy"
const createinoive = new Createinvoice


it('createinoive', function(){
    cy.visit ('https://infinitymediala.devtrust.biz/')
    cy.email('subodh.c@devtrust.biz');
    cy.loginpassword('Test@1234');
    cy.get('.form_aria > .btn').click();
    createinoive.clickoninvoice();
    cy.wait(25000);
    createinoive.clickonaddinvoicebutton();
    cy.wait(25000);
    createinoive.selectclientname();
    createinoive.enterservicename();
    createinoive.enterservicedescription();
    createinoive.scrollinvoiceform();
    createinoive.clickonnextbutton();
    cy.wait(15000);
    createinoive.enterinvoiceamount();
    createinoive.selectbillingtype();
    createinoive.scrollinvoicebillingform();
    createinoive.enterbillinghours();
    createinoive.clickonaddmore();
    createinoive.enterservicename2();
    createinoive.enterservicedescription2();
    createinoive.scrollinvoicebillingform2();
    createinoive.servicebilltype2();
    createinoive.enterbillingdays();
    createinoive.clicksecondnextbutton();
    createinoive.scrollthepage();
    createinoive.clickonsignbuttom();
    createinoive.addsignature();
    createinoive.clickconfirmsignature();
    createinoive.Sendtheinvoice();
    createinoive.scrollfinalpage();
    createinoive.clickonfinalsendbutton();
})
