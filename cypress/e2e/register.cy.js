describe("Register Test", () => {
  it("should navigate to the registration page", () => {
    cy.visit("localhost:8000/auth/register");
    cy.contains("register").click();
  });

  it("should successfully register a new user", () => {
    cy.visit("localhost:8000/auth/register");
    cy.get("#name").type("testuser");
    cy.get("#email").type("testuser@example.com");
    cy.get("#password").type("password");
    cy.get("#confirmation").type("password");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/auth/login");
  });
});
