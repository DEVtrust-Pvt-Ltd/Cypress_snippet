import {Registration} from "../Pages/Registration_Page.cy"
const registration = new Registration
  it('register', function(){

    registration.navigate();
    registration.enterusername();
    registration.enteruseremail();
    registration.enterpassword();
    registration.clicksubmit();

  })