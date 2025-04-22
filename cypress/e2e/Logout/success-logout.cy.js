import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.login("user1@gmail.com", "password");
});

When("user klik tombol logout", () => {
  cy.visit("/");
  cy.get(".relative > button > .isax");
  cy.get(".py-1 > .block").click({ force: true });
});

Then("user diarahkan ke halaman utama setelah logout", () => {
  cy.url().should("include", "/");
});
