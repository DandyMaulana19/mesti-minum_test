import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user berada di halaman register', () => {
  cy.visit("http://localhost:8000/auth/register");
});

When('user klik teks {string}', (text) => {
  cy.contains(text).click();
});

Then('halaman register harus muncul', () => {
  cy.url().should("include", "/auth/register");
});

When('user mengisi nama {string}', (name) => {
  cy.get("#name").type(name);
});

When('user mengisi email {string}', (email) => {
  cy.get("#email").type(email);
});

When('user mengisi password {string} dan konfirmasi {string}', (password, confirmation) => {
  cy.get("#password").type(password);
  cy.get("#confirmation").type(confirmation);
});

When('user klik tombol submit', () => {
  cy.get('button[type="submit"]').click();
});

Then('user harus diarahkan ke halaman login', () => {
  cy.url().should("include", "/auth/login");
});
