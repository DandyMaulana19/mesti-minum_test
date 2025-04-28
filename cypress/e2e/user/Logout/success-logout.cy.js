import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

describe("Logout User", () => {
  Given("user telah login", () => {
    Cypress.session.clearAllSavedSessions();
  });

  When("user klik tombol logout", () => {
    cy.visit("/");
    cy.get(".relative > button > .isax").click();
    cy.get(".py-1 > .block").click({ force: true });
  });

  Then("user diarahkan ke halaman utama setelah logout", () => {
    cy.url().should("include", "/");
  });
});
