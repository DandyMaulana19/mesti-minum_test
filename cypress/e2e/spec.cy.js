beforeEach(() => {
  const specPath = Cypress.spec.relative;
  const isAdminPath = specPath.includes("/admin/");

  if (isAdminPath) {
    cy.login("rsiyun@gmail.com", "password");
  } else if (specPath.includes("/user/")) {
    cy.login("user1@gmail.com", "password");
  }
});
