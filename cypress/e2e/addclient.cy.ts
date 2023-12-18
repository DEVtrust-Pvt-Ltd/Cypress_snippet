import { Addclient } from "../Pages/Add_client.cy"
import {LoginPage} from "../Pages/Login_Page.cy"
import {Registration} from "../Pages/Registration_Page.cy"
const loginPage = new LoginPage
const addclient = new Addclient 
const registration = new Registration
it('Registration, login & add client', function(){
  // Registration
  registration.navigate();
  registration.enterusername();
  registration.enteruseremail();
  registration.enterpassword();
  registration.clicksubmit();  
  // Adding a delay after registration
  cy.wait(2000); // You can adjust the delay duration as needed    
     // Login after successful registration
  loginPage.navigate();
  loginPage.enterusername(); // Use the username entered during registration
  loginPage.enterpassword(); // Use the password entered during registration
  loginPage.clicklogin();  
  // Adding a delay after login
  cy.wait(6000);// You can adjust the delay duration as needed
    addclient.clickonclient();
    cy.wait(15000);
    addclient.clickaddbuton();
    cy.wait(15000);
    addclient.enterclientname();
    addclient.clickonnext();
    addclient.entercontracttname();
    addclient.secondnextbutton();
    addclient.enterclientemail();
    addclient.thirdnextbutton();
    addclient.enterclientphone();
    addclient.fourthnextbutton();
    cy.wait(2000);
    addclient.scrolltobottom();
    addclient.enterclientaddress();
    addclient.enterclientcity();
    addclient.enterclientzipcode();
    addclient.enterclientcountry();
    addclient.enterclientstate();
    addclient.clicksubmitbutton();    
})