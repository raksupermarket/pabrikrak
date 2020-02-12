import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MejakasirPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
  <div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-3 p-3 p-md-5 bg-white"></div>
  <div class="col-12 col-md-6 p-3 p-md-5 bg-white">
    <Layout location={location} title={siteTitle}>
      <SEO title="Meja Kasir" />
      <h1><strong><a href="mejakasir" title="meja kasir">MEJA KASIR</a></strong></h1><hr/>
	  <img alt="meja kasir terbaru" class="img-fluid rounded shadow shadow-lg" src="/img/meja kasir mewah 180 deluxe.jpg"/>
<p>	  
Meja kasir besi model terbaru kami diproduksi dengan bahan baku full besi dan stainless pada atap <a href="mejakasir" title="meja kasir">meja kasir</a> antrian pengunjung, selain itu teknik pewarnaan powder coating menjadikan awet dan tahan lama dalam penggunaan meja kasir untuk jangka panjang.
</p>
	  <img alt="meja kasir terbaru" class="img-fluid rounded shadow shadow-lg" src="/img/meja kasir news.jpg"/>
<p>dan tersedia beberapa variant <a href="mejakasir" title="meja kasir">MEJA KASIR BESI MODEL TERBARU</a> untuk digunakan pada usaha anda seperti meja kasir mini 120cm , meja kasir 150cm supernova , meja kasir deluxe 180cm. sangat elegan dan terlihat mewah untuk digunakan pada usaha anda, banyak bidang usaha sudah menggunakan meja kasir kami mulai dari supermarket,minimarket,all toko shop store dan baby shop serta apotik dalam berbagai kebutuhan akan meja kasir ini.</p>
<p>Untuk pemilihan warna sendiri anda bebas untuk memilih warna sesuai dengan selera anda atau bisa disamakan dengan warna cat dinding ruangan anda, sehingga selain merapikan produk produk gudang maupun lab anda juga mampu untuk mempercantik ruangan usaha.</p>
		  <hr/> <Bio /><hr/> </Layout></div>
			   <div class="col-12 col-md-3 p-3 p-md-5text-center"></div>
			   </div>
  )
}

export default MejakasirPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
