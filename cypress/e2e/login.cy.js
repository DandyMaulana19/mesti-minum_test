describe("Login Test", () => {
  it("should log in successfully with valid credentials", () => {
    cy.visit("localhost:8000/auth/login");
    cy.get("#email").type("user1@gmail.com");
    cy.get("#password").type("password");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/");
  });
});
