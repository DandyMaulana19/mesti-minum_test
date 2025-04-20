import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.login("user1@gmail.com", "password");
});

When("user klik tombol logout", () => {
  cy.get(".relative > button > .isax").click();
  ssssssss;
});

Then("user diarahkan ke halaman utama setelah logout", () => {
  cy.url().should("include", "/");
});
