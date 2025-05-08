Feature: Add Order

Scenario: Success Add Order
  When admin berada di halaman orders
  And admin klik tombol tambah order
  Then admin diarahkan ke halaman add order

  When admin mengisi nama pelanggan dengan "Anggota1"
  And admin mengisi nama product yang dipesan dengan "susu"
  And admin mengisi detail alamat pesanan dengan "Lobby kampus Telkom University Surabaya"
  And admin mengisi lokasi tujuan pesanan dengan "Telkom University Surabaya"
  And admin memilih ekspedisi
  And admin mengisi nomer resi dengan "12345ABCDE"
  And admin klik tombol cek ongkir
  And admin klik tombol add order
  Then admin diarahkan ke halaman orders