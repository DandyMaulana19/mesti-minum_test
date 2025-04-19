Feature: Login

  Scenario: User login dengan kredensial valid
    Given user berada di halaman login
    When user mengisi email "user1@gmail.com" dan password "password"
    And user klik tombol login
    Then user harus diarahkan ke halaman home
