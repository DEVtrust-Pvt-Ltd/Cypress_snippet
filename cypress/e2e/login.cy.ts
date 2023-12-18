import {LoginPage} from "../Pages/Login_Page.cy"
import {Registration} from "../Pages/Registration_Page.cy"

const loginPage = new LoginPage
const registration = new Registration

it('register and login', function(){

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
  cy.wait(2000); // You can adjust the delay duration as needed
  
  
  loginPage.clicklogout();

})
