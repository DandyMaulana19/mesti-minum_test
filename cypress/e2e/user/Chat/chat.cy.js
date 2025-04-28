import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("Chat User", () => {
  Given("user berada di halaman chat", () => {
    cy.visit("/profile/chat");
  });

  When("user klik admin dengan nama {string}", (chat) => {
    cy.contains(chat).click();
  });

  Then("halaman chat harus muncul", () => {
    cy.url().should("include", "/profile/chat/detail-chat");
  });

  When("user mengisi pesan {string}", (string) => {
    cy.get("form > div > textarea").type(string);
  });

  When("user klik tombol kirim", () => {
    cy.get('button[type="submit"]').click();
  });

  Then("sistem akan memunculkan pesan yang telah dikirim {string}", (pesan) => {
    cy.get("#list-message").contains(pesan);
  });
});
