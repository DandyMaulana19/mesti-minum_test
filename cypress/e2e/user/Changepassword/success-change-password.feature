Feature: Change password

    Scenario:
        When user berada di halaman change password
        And user mengisi password lama "password"
        And user mengisi password baru "Password"
        And user klik tombol change password
        Then muncul notifikasi sukses