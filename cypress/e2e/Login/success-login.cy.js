import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user berada di halaman login', () => {
  cy.visit("/auth/login");
});

When('user mengisi email {string} dan password {string}', (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);
});

When('user klik tombol login', () => {
  cy.get('button[type="submit"]').click();
});

Then('user harus diarahkan ke halaman home', () => {
  cy.url().should("include", "/");
});
