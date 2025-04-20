Feature: Logout
  Background:
    Given pengguna telah login ke aplikasi dengan email "user1@gmail.com" dan password "password"

  Scenario: User logout
    When user klik tombol logout
    Then user diarahkan ke halaman utama setelah logout