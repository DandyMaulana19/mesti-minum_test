import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("admin berada di halaman product", () => {
  cy.visit("/dashboard/products");
});

When("admin klik tombol edit pada product", () => {
  cy.get(":nth-child(1) > :nth-child(5) > .flex > .text-sm").click();
});

Then("admin diarahkan ke halaman edit product", () => {
  cy.url().should("include", "products/");
});

When("admin memilih ukuran product yang akan di edit", () => {
  cy.get(":nth-child(3) > .flex-wrap > :nth-child(1)").click();
});

When("admin mengisi nama product dengan {string}", (namaProduct) => {
  cy.get("#product_name").clear().type(namaProduct);
});

When("admin mengisi deskripsi product dengan {string}", (deskripsiProduct) => {
  cy.get("#description").clear().type(deskripsiProduct);
});

When("admin mengisi ukuran product dengan {string}", (ukuranProduct) => {
  cy.get("#sizeInput").clear().type(ukuranProduct);
});

When("admin mengisi harga product dengan {string}", (hargaProduct) => {
  cy.get("#priceInput").clear().type(hargaProduct);
});

When("admin mengisi stok product dengan {string}", (stokProduct) => {
  cy.get("#stockInput").clear().type(stokProduct);
});

When("admin mengisi panjang product dengan {string}", (panjangProduct) => {
  cy.get("#length").clear().type(panjangProduct);
});

When("admin mengisi lebar product dengan {string}", (lebarProduct) => {
  cy.get("#width").clear().type(lebarProduct);
});

When("admin mengisi berat product dengan {string}", (beratProduct) => {
  cy.get("#weight").clear().type(beratProduct);
});

When("admin klik tombol ubah ukuran", () => {
  cy.get("button")
    .contains(/UBAH UKURAN/i)
    .click();
});

When("admin klik tombol update", () => {
  cy.get("button[type=submit]")
    .contains(/Update Product/i)
    .click();
});

Then("admin diarahkan ke halaman products", () => {
  const baseUrl = Cypress.config("baseUrl");
  cy.url().should("eq", `${baseUrl}dashboard/products`);
});
