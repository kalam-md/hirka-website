export default function About() {
  return (
    <>
      <header className="flex">
        <img src="./img/about.png" alt="header" className="w-screen"/>
      </header>

      <div className="grid md:grid-cols-2 md:p-16 p-10 gap-10">
        <div className="order-last md:order-first">
          <p><span className="font-bold">Hirka</span> adalah sebuah usaha kreatif UKM yang berasal dari Bandung, Jawa Barat.Hirka sendiri mengambil kata dari Bahasa Turki yang mempunyai arti “dicintai”secara harfiah. Jika diartikan lebih dalam Hirka juga memiliki arti “Karya Seni”.Sehingga Owner dari brand ini pun meyebutkan bahwa Hirka itu menciptakan sebuah karya seni yang dapat menarik perhatian orang-orang atau meyakinkan sebuah produk yang diciptakan agar yakin terhadap karya seni yang telah dibuat.”</p>

          <p className="font-bold my-3">Penjelasan Asal mulanya Hirka</p>

          <p>Di tahun 2015, Nurman Farieka Ramdhany mengembangkan sebuah material hasil riset ayahnya yang meneliti banyak kulit hewan, lalu mulai meneliti kulit ceker ayam, apakah kulit ceker ayam bisa tahan lama untuk dijadikan sebuah sepatu ??, dan hasil penelitian ayahnya membuahkan hasil yang manis dan dilanjutkan oleh anaknya Nurman Farieka Ramdhany untuk membuat sepatu dengan nama HIRKA ini meskipun proses yang diperlukan memakan waktu yang cukup lama hingga 10 hari untuk menghasilkan kulit ceker yang kuat untuk dijadikan bahan kulit sepatu.</p>

          <p className="mt-3">Selama dua tahun melakukan riset produk dan market, di tahun 2017 Hirka resmi melangkah di dunia sepatu lokal sekaligus menjadi brand sepatu pertama di dunia yang menggunakan material kulit kaki ayam. Hirka mengawali kisahnya sebagai brand sepatu model formal, hingga kini terus berkembang menjadi brand lifestyle brand yang mengutamakan ide dan inovasi yang unik juga fresh di setiap lini produk yang dibuatnya.”</p>
        </div>

        <img src="./img/about-people.png" alt="people" className=""/>
      </div>
    </>
  )
}