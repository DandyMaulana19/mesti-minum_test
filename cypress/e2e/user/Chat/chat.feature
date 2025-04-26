Feature: Chat User

  Scenario: Chat User dengan credential valid
    Given user berada di halaman chat
    When user klik admin dengan nama "Admin 1"
    Then halaman chat harus muncul
    When user mengisi pesan "Hello world"
    And user klik tombol kirim
    Then sistem akan memunculkan pesan yang telah dikirim "Hello world"