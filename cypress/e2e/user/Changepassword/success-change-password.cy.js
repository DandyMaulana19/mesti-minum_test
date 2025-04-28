import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("Change Password", () => {
  When("user berada di halaman change password", () => {
    cy.visit("/profile/change-password");
  });

  When("user mengisi password lama {string}", () => {
    cy.get("#oldPassword").type("password");
  });

  When("user mengisi password baru {string}", () => {
    cy.get("#newPassword").type("Password");
  });

  When("user klik tombol change password", () => {
    cy.get("form").submit();
  });

  Then("muncul notifikasi sukses", () => {
    cy.get(".swal2-popup");
  });
});
