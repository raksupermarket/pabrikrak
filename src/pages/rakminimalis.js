import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RakminimalisPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
  <div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-3 p-3 p-md-5 bg-white"></div>
  <div class="col-12 col-md-6 p-3 p-md-5 bg-white">
    <Layout location={location} title={siteTitle}>
      <SEO title="Rak supermarket minimalis,rak minimarket minimalis,rak toko minimalis" />
      <h1><a href="rakminimalis" title="rak minimalis">Rak Minimalis Modern</a></h1><hr/>
	  <img alt="Rak supermarket minimalis,rak minimarket minimalis,rak toko minimalis" class="img-fluid rounded shadow shadow-lg" src="/img/rakminimalis.jpg"/>
<p>	  
Rak minimalis full plat besi terbaik digunakan untuk yang membutuhkan dalam menunjang desain interior <a href="rakminimalis" title="rak minimalis">minimalis</a> dan clean dalam penggunaan nya. mode ini banyak digunakan pada baby shop , butik , toys shop , pet shop , apotik farmasi dalam kebutuhan menunjang display agar lebih elegan dan mewah.</p>
<p>Diproduksi dengan full plat besi dan menggunakan knockdown system memudahkan dalam memasang nya dimana saja sesuai dengan desain keinginan dan penempatan.</p>
<p>
SPESIFIKASI :<br/>
Tebal shelfing papan : 0.8mm.<br/>
Tebal tiang : 1.8mm.<br/>
Tebal bracket : 2mm.<br/>
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
Produk yang mewah dan sangat mewah untuk digunakan dalam memajang display dagangan dengan full plat besi tentu memiliki kekuatan yang sudah tidak perlu diragukan dan sangat powerfull dalam berbagai aspek kebutuhan display.
</p>
<p>HARGA :<br/>
Harga relatif sedikit lebih mahal dibandingkan dengan <a title="rak murah" href="rakmurah">rak murah</a> type ram jaring ,hal ini dikarenakan produksi nya menggunakan full plat besi yang menciptakan kekuatan powerfull dalam menahan beban serta desain yang mewah dan elegan serta clean.Harga yang setara dengan kualitas bisa didapatkan pada produk ini.
</p>
<p>Demo video klik dibawah ini</p>
<a href="https://www.youtube.com/watch?v=Ovbk5CqYcKE&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=65&t=12s" class="button" target="blank">Pemasangan</a>.
 <hr/> <Bio /><hr/>
			  </Layout></div>
			   <div class="col-12 col-md-3 p-3 p-md-5text-center"></div>
			   </div>
  )
}

export default RakminimalisPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
