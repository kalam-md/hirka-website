export default function Guide() {
  return (
    <>
      <header className="flex">
        <img src="../img/guide.png" alt="header" className="w-screen"/>
      </header>

      <div className="grid md:grid-cols-2 p-10 md:px-16 md:pt-16 gap-10">
        <div className="bg-red-100">
          <img src="../img/guide1.png" alt="people" className="bg-cover bg-center"/>
        </div>

        <div className="-mt-8 md:-mt-0">
          <p className="text-2xl tracking-wide font-nav">SARAN UMUM</p>
          <p className="mt-3">Saat menggunakan sepatu baru, kami sarankan untuk selalu menggunakan sendok sepatu (shoehorn) ketika memakai dan melepas sepatu untuk mencegahkerusakan pada sepatu. Selanjutnya, karena kulit sebagai bahan yang tetap “hidup”, disarankan untuk memasukkan cengkal sepatu (shoetree) untuk menjaga bentuk serta menyimpan kembali sepatu ke dalam kotak penyimpanan.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 px-10 md:px-16 md:pt-10 md:pb-8 gap-10">
        <div className="bg-red-100">
          <img src="../img/guide2.png" alt="people" className="bg-cover bg-center"/>
        </div>

        <div className="-mt-8 md:-mt-0">
          <p className="text-2xl tracking-wide font-nav">Penyemiran & pemolesan</p>
          <p className="mt-3">Sangat penting untuk memilih semir dengan warna yang sesuai dengan warna sepatu. Pertama-tama, sepatu disikat dengan menggunakan sikat lembut sampai merata dan tidak berlebihan. Gerakan memutar dan halus memastikan keseragaman warna yang sempurna. Untuk menambahkan krim perawatan produk lain, gunakan kain yang halus agar merata pada setiap bagian sepatu. Keringkan krim yang meluber pada sole sepatu agar tetap bersih.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-10 md:px-16 md:pt-10 md:pb-8 gap-10">
        <div className="bg-red-100">
          <img src="../img/guide3.png" alt="people" className="bg-cover bg-center"/>
        </div>

        <div className="-mt-8 md:-mt-0">
          <p className="text-2xl tracking-wide font-nav">Pembersihan dan perawatan</p>
          <p className="mt-3">Untuk menjaga tekstur kulit agar tidak mengalami perubahan yang ekstrem, disarankan untuk membersihkan sepatu dengan menggunakan sikat lembut demi menghindari goresan pada permukaan kulit sepatu. Bintik-bintik noda tidak bisa dibersihkan dengan cara paksa menggunakan sikat. Pembersihan dilakukan dengan menggunakan spon atau sabun netral. Perawatan sole dan jahitan dilakukan dengan membubuhkan krim perawatan produk kulit pada permukaannya kemudian dilap dengan menggunakan lap yang lembut.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 px-10 pb-8 md:px-16 md:pt-10 md:pb-8 gap-10">
        <div className="bg-red-100">
          <img src="../img/guide4.png" alt="people" className="bg-cover bg-center"/>
        </div>

        <div className="-mt-8 md:-mt-0">
          <p className="text-2xl tracking-wide font-nav">penyimpanan</p>
          <p className="mt-3">Untuk menjaga tekstur kulit agar tidak mengalami perubahan yang ekstrem, disarankan untuk membersihkan sepatu dengan menggunakan sikat lembut demi menghindari goresan pada permukaan kulit sepatu. Bintik-bintik noda tidak bisa dibersihkan dengan cara paksa menggunakan sikat. Pembersihan dilakukan dengan menggunakan spon atau sabun netral. Perawatan sole dan jahitan dilakukan dengan membubuhkan krim perawatan produk kulit pada permukaannya kemudian dilap dengan menggunakan lap yang lembut.</p>
        </div>
      </div>
    </>
  )
}