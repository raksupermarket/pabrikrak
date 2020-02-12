import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RakmurahPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
  <div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-3 p-3 p-md-5 bg-white"></div>
  <div class="col-12 col-md-6 p-3 p-md-5 bg-white">
    <Layout location={location} title={siteTitle}>
      <SEO title="Rak supermarket murah,rak minimarket murah,rak toko murah" />
      <h1>Rak Display Ram</h1><hr/>
	  <img alt="Rak supermarket murah,rak minimarket murah,rak toko murah" class="img-fluid rounded shadow shadow-lg" src="/img/rakmurah.jpg"/>
<p>	  
Rak type dan jenis ini banyak digunakan pada usaha <a title="supermarket minimarket toko shop store outlet" href="/rakmurah">supermarket minimarket dan toko shop store outlet</a> pada umumnya dalam kebutuhan rak display untuk memajang produk produk dagangan nya, diproduksi dengan menggunakan bahan baku full besi menjadikan lebih kuat awet dan tahan lama untuk digunakan, selanjutnya powder coating pada pelapis warna cat berguna untuk anti korosi semakin sempurna dalam menggunakan produk ini.</p>
<img alt="Rak supermarket murah,rak minimarket murah,rak toko murah" class="img-fluid rounded shadow shadow-lg" src="/img/raktokosupermarket.jpg"/>
<p>Tehnik perakitan menggunakan knock down system memudahkan untuk memasang nya dimana saja sesuai kebutuhan mu, semakin ringkas dan cepat pada aplikasi penempatan sesuai dengan tatanan desain mu.</p>
<img alt="Rak supermarket murah,rak minimarket murah,rak toko murah" class="img-fluid rounded shadow shadow-lg" src="/img/rakminimarket.jpg"/>
<p>
SPESIFIKASI :<br/>
Tebal shelfing papan : 0.7mm.<br/>
Tebal tiang : 1.7mm.<br/>
Tebal bracket : 1.8mm.<br/>
Tinggi tersedia mulai dari 120cm - 150cm - 180cm - 200cm - 220cm hingga 240cm khusus untuk dobel rak rekomendasi tertinggi 180cm untuk digunakan.<br/>
Panjang standard rak adalah : 90cm / unit.<br/>
Lebar tersedia mulai dari : 30cm - 35cm - 40cm - 45cm.</p>
<p>VARIANT TYPE :<br/>
Singgle rak dengan satu sisi biasa disebut rak dinding.<br/>
Dobel rak dengan dua sisi kanan dan kiri biasa berada di tengah ruangan.<br/>
End rak pembuka dan penutup pada dobel rak.<br/>
Starter merupakan rak awalan dengan dua tiang.<br/>
Join rak tambahan yang menopang pada starter.<br/>
</p>
<p>KELEBIHAN :<br/>
Dengan menggunakan ram jaring maka memudahkan dalam memajang produk via gantungan dengan menggunakan hook untuk produk produk display yang membutuhkan gantungan cantol, jadi mode ini menjadi lebih baik dengan kombinasi papan dan hook cantolan dalam penggunaan nya.
</p>
<p>HARGA :<br/>
Harga produksi nya relatif lebih <a title="rak murah" href="/rakmurah">murah</a> dibandingkan dengan produk produk rak besi lain nya, sehingga ini lah alasan mengapa produk ini begitu best seller dalam digunakan menunjang barang dagangan dan digunakan untuk display.
</p>
<p>Demo video klik dibawah ini</p>
<a href="https://www.youtube.com/watch?v=56kxoeydSbQ&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=69&t=0s" class="button" target="blank">Pemasangan</a>.
<a href="https://www.youtube.com/watch?v=G4hcG9OTe-0&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=70&t=22s" class="button" target="blank">Kekuatan</a>.
 <hr/> <Bio /><hr/>
			  </Layout></div>
			   <div class="col-12 col-md-3 p-3 p-md-5text-center"></div>
			   </div>
  )
}

export default RakmurahPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
