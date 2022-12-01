import { LoginPage } from "../../pages/Login_page";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const loginPage = new LoginPage();
Given("User navigates to HICSE Portal", () => {
  cy.visit("/");
  cy.title().should("eq", "Portal");
});

When(
  "User enters the Username {string} and Password {string}",
  (username, password) => {
    cy.screenshot();
    loginPage.email(username);
    loginPage.password(password);
  }
);
Then("User checks the Remember me Button and clicks on Login button", () => {
  //  loginPage.checkRememberMe();
  loginPage.signInButton();
});

Then("User verifies {string} on the Sessions Page", (content) => {
  loginPage.verifySessionText(content);
});
