Feature: Update Product

Scenario: Success Update Product
  When admin berada di halaman product
  And admin klik tombol edit pada product
  Then admin diarahkan ke halaman edit product

  When admin memilih ukuran product yang akan di edit
  And admin mengisi nama product dengan "Roti Coklat Belgia"
  And admin mengisi deskripsi product dengan "Roti yang terbuat dari coklat belgia"
  And admin mengisi ukuran product dengan "Medium"
  And admin mengisi harga product dengan "20.000"
  And admin mengisi stok product dengan "20"
  And admin mengisi panjang product dengan "5"
  And admin mengisi lebar product dengan "5"
  And admin mengisi berat product dengan "2"
  And admin klik tombol ubah ukuran
  When admin klik tombol update
  Then admin diarahkan ke halaman products