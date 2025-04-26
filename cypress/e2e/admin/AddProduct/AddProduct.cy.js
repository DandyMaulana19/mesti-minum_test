import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  // cy.login("rsiyun@gmail.com", "password");
});

When("admin berada di halaman add product", () => {
  cy.visit("/dashboard/products/add");
});

When("admin mengisi nama product", () => {
  cy.get("#product_name").type("susu coklat");
});

When("admin mengisi deskripsi product", () => {
  cy.get("#description");
});

When("admin memilih opsi ya", () => {
  get('[type="radio"]').first().check();
  // cy.get("#ya").
});
