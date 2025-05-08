import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("Add Order", () => {
  When("admin berada di halaman orders", () => {
    cy.visit("/dashboard/orders");
  });

  When("admin klik tombol tambah order", () => {
    cy.get('a[href="/dashboard/orders/add"]').click();
  });

  Then("admin diarahkan ke halaman add order", () => {
    cy.url().should("include", "orders/add");
  });

  When("admin mengisi nama pelanggan dengan {string}", (name) => {
    cy.get("#name").type(name);
    cy.get(".absolute > :nth-child(1) > .block").click();
  });

  When("admin mengisi nama product yang dipesan dengan {string}", (product) => {
    cy.get("#searchbarang").type(product);
    cy.get(".absolute > :nth-child(1) > .flex > .block").click();
  });

  When(
    "admin mengisi detail alamat pesanan dengan {string}",
    (detailAlamat) => {
      cy.get("#detailaddress").type(detailAlamat);
      cy.get(".glass");
    }
  );

  When("admin mengisi lokasi tujuan pesanan dengan {string}", (lokasi) => {
    cy.get(".glass").type(lokasi);
    cy.wait(2000);
    cy.get(".results > div").click();
    cy.wait(2000);
    cy.get('[x-data="maps"] > .w-full').click();
  });

  When("admin memilih ekspedisi", () => {
    cy.get("#expedition").select("Paxel");
  });

  When("admin mengisi nomer resi dengan {string}", (resi) => {
    cy.get("#waybill").type(resi);
  });

  When("admin klik tombol cek ongkir", () => {
    cy.get("button")
      .contains(/CEK ONGKIR/i)
      .click();
    cy.wait(20000);
    cy.get("#button1").click();
  });

  When("admin klik tombol add order", () => {
    cy.get("button")
      .contains(/ADD ORDER/i)
      .click();
  });

  Then("admin diarahkan ke halaman orders", () => {
    cy.url().should("include", "/orders");
  });
});
