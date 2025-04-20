import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "pengguna telah login ke aplikasi dengan email {string} dan password {string}",
  (email, password) => {
    cy.visit("http://127.0.0.1:8000/auth/login");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('button[type="submit"]').click();
  }
);

When("user klik tombol logout", () => {
  cy.get(".relative > button > .isax").click();
  cy.get(".py-1 > .block").click({ force: true });
});

Then("user diarahkan ke halaman utama setelah logout", () => {
  cy.url().should("include", "/");
});
