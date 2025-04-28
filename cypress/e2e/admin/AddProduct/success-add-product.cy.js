import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("Add Product", () => {
  When("admin berada di halaman add product", () => {
    cy.visit("/dashboard/products/add");
  });

  When("admin mengisi nama product", () => {
    cy.get("#product_name").type("susu coklat");
  });

  When("admin mengisi deskripsi product", () => {
    cy.get("#description").type("mesti susu varian rasa coklat");
  });

  When("admin memilih opsi ya", () => {
    cy.get('[type="radio"]').first().check();
  });

  When("admin mengisi ukuran barang", () => {
    cy.get("#sizeInput").type("10");
  });

  When("admin mengisi harga barang", () => {
    cy.get("#priceInput").type("10000");
  });

  When("admin mengisi stok barang", () => {
    cy.get("#stockInput").type("5");
  });

  When("admin mengisi panjang barang", () => {
    cy.get("#length").type("10");
  });

  When("admin mengisi lebar barang", () => {
    cy.get("#width").type("10");
  });

  When("admin mengisi tinggi barang", () => {
    cy.get("#height").type("10");
  });

  When("admin mengisi berat barang", () => {
    cy.get("#weight").type("10");
  });

  When("admin menginput form harga dan stok barang", () => {
    cy.get("button")
      .contains(/TAMBAHKAN UKURAN/i)
      .click();
  });

  When("admin menginput foto barang", () => {
    cy.get("input[type=file]").selectFile(
      "cypress/fixtures/img/mesti susu.webp",
      { force: true }
    );
  });

  When("admin memilih kategori barang", () => {
    cy.get('input[placeholder="Search category"]').type("susu");
    cy.get(".absolute > .flex > .block").contains(/susu/i).click();
  });

  When("admin klik tombol add", () => {
    cy.get("button[type=submit]")
      .contains(/Add Product/i)
      .click();
  });

  Then("user diarahkan ke halaman product", () => {
    cy.url().should("include", "/dashboard/products");
  });
});
