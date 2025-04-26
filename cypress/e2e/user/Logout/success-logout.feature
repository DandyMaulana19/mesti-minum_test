Feature: Logout

Background:
    Given user telah login

  Scenario: User logout
    When user klik tombol logout
    Then user diarahkan ke halaman utama setelah logout