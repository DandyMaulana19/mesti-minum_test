// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const specPath = Cypress.spec.relative;
const isAdminPath = specPath.includes("/admin/");

Cypress.Commands.add("login", (email, password) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.session([email, password], () => {
    cy.visit("/auth/login");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('button[type="submit"]').click();
    Cypress.on("uncaught:exception", (err) => {
      if (err.message.includes("getContext")) return false;
      return true;
    });
    if (isAdminPath) {
      cy.url().should("eq", `${baseUrl}dashboard`);
    } else {
      cy.url().should("eq", baseUrl);
    }
  });
});
