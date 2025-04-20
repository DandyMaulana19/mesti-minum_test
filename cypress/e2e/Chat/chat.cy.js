import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach(()=>{
    cy.login("user1@gmail.com", "password")
})
Given("user berada di halaman chat", ()=>{
    cy.visit("http://localhost:8000/profile/chat");
});
When('user klik admin dengan nama {string}', (chat) => {
    cy.contains(chat).click();
});

Then('halaman chat harus muncul', () => {
    cy.url().should("include", "/profile/chat/detail-chat");
});

When('user mengisi pesan {string}', (string) => {
    cy.get("#input-pesan").type(string);
});

When('user klik tombol kirim', () => {
    cy.get('button[type="submit"]').click();
});

Then('sistem akan memunculkan pesan yang telah dikirim {string}', (pesan) => {
    cy.get("#list-message").contains(pesan)
});
  


  
