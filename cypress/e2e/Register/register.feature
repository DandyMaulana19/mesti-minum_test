Feature: Register

  Scenario: Akses halaman register
    Given user berada di halaman register
    When user klik teks "register"
    Then halaman register harus muncul

  Scenario: Register user baru dengan data valid
    Given user berada di halaman register
    When user mengisi nama "testuser"
    And user mengisi email "testuser@example.com"
    And user mengisi password "password" dan konfirmasi "password"
    And user klik tombol submit
    Then user harus diarahkan ke halaman login
