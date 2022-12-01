export class LoginPage {
  login_email = "#hvinput2-input";
  login_password = "#hvinput4-input";
  remember_me = "#hvcheckbox5-input";
  login_submit = "Login";
  sessions_text = ".jss-uikit24 > .HvTypography-root";
  avatar_icon =
    ".MuiButton-label > .HvAvatar-container > .HvAvatar-status > .MuiAvatar-root";
  logout_button = "Log Out";
  sessions_color = ".HvHeaderMenuItem-button > .HvTypography-root";

  navigateTo() {
    cy.visit("/");
  }
  email(email) {
    switch (email) {
      case "emailAdmin":
        cy.get(this.login_email).type(Cypress.env("emailAdmin"));
        break;
      case "emailTeacher":
        cy.get(this.login_email).type(Cypress.env("emailTeacher"));
        break;
      case "emailTrainee":
        cy.get(this.login_email).type(Cypress.env("emailTrainee"));
        break;

      default:
        cy.get(this.login_email).type(email);
        break;
    }
  }
  password(password) {
    switch (password) {
      case "passwordAdmin":
        cy.get(this.login_password).type(Cypress.env("passwordAdmin"));
        break;
      case "passwordTeacher":
        cy.get(this.login_password).type(Cypress.env("passwordTeacher"));
        break;
      case "passwordTrainee":
        cy.get(this.login_password).type(Cypress.env("passwordTrainee"));
        break;

      default:
        cy.get(this.login_password).type(password);
        break;
    }
  }
  checkRememberMe() {
    cy.get(this.remember_me).check();
  }
  signInButton() {
    cy.contains(this.login_submit).click({ force: true });
  }
  verifySessionText(text) {
    cy.contains(text).should("be.visible");
  }
  clickOnAvatarIcon() {
    cy.get(this.avatar_icon).click();
  }
  clickOnLogOut() {
    cy.contains(this.logout_button).click();
  }
  verifyWelcomeMessage(message) {
    cy.contains(message).should("be.visible");
  }
  verifyTextColor(textColor) {
    cy.get(this.sessions_color).should("have.css", "color", textColor);
  }
}
