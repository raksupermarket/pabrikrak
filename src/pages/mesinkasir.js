import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MesinkasirPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
  <div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-3 p-3 p-md-5 bg-white"></div>
  <div class="col-12 col-md-6 p-3 p-md-5 bg-white">
    <Layout location={location} title={siteTitle}>
      <SEO title="Alarm security toko baju supermarket" />
      <h1><strong><a href="mesinkasir" title="mesin kasir">MESIN KASIR</a></strong></h1><hr/>
<p>Dalam sebuah bidang bisnis dan usaha membutuhkan sebuah system technology modern untuk kebutuhan akan pembukuan dan mempercepat transaksi , maka untuk itulah sebauh system mesin kasir yang sudah dilengkapi dengan software kasir program kasir dipergunakan dalam kebutuhan mengakomodasi pembukuan bisnis usaha.</p>
<p>Secara systematis technology ini pun dapat digunakan baik sebagai single standalone tunggal maupun digunakan untuk berbagi shared databased dengan pembagian divisi mulai dari inventori stok management, pembelian , penjualan kasir point of sale hingga admin backoffice serta optional kebutuhan akan price checker alat cek harga system dalam kebutuhan nya.</p>
<p>Online technology adalah sebuah modern technology yang memungkinkan cek laporan dan monitoring pembukuan dimana dan kapan saja secara real time online merupakan generasi terbaru saat ini untuk kebutuhan mobilitas.</p>
<p>Desktop offline mode adalah solusi terbaik pada usaha ini tanpa biaya bulanan dan dapat dipakai selamanya pada mesin kasir anda adalah prioritas utama dalam penggunaan nya, selain itu dengan based terbaik dan kompleks sangat stabil menggunakan system ini untuk kebutuhan stabilitas point of sale dalam penerapan nya.</p>
<p>Apa saja POS <a href="mesinkasir" title="mesin kasir">mesin kasir</a> system untuk digunakan ?? kami menyediakan dua variant mesin kasir dalam penggunaan nya dan anda dapat menambahkan divisi sesuai dengan permintaan yang nanti nya akan kami kalkulasikan anggaran biaya pos point of sale sesuai kebutuhan pembagian divisi.</p>
	  <img alt="mesin kasir" class="img-fluid rounded shadow shadow-lg" src="/img/TOUCHSCREEN6.png"/>
	  <h3><a href="mesinkasir" title="mesin kasir">TOUCHSCREEN POS</a></h3>
	  <p>System all in one point of sale pos mesin kasir touchscreen persembahan dari ASUS untuk menunjang usaha, lengkap detail dan kompleks serta sangat sensitif dengan material desain mewah fashionable dengan slim desain ini adalah ciri modern mesin kasir untuk digunakan, tersedia beberapa package set plus injeksi software program kasir lengkap full support barcode dan touchscreen semakin sempurna dalam penggunaan nya, miliki ASUS all in one pos untuk usaha mu.</p>
<a href="https://www.youtube.com/watch?v=NLxDbnyQ4r4" class="button" target="blank">Video</a>. <a href="/file/touchscreen.pdf" class="button" target="blank">Download</a>.
	  <img alt="meja kasir terbaru" class="img-fluid rounded shadow shadow-lg" src="/img/mesinkasironline-murah.png"/>
	  <h3><a href="mesinkasir" title="mesin kasir">PORTABLE POS</a></h3>
	  <p>Portable Point of sale dengan offline mode semakin cepat dan tanpa biaya bulanan menjadikan solusi murah untuk pembukuan usaha mu, dukungan penuh by hewllet packard windows tablet 10inc dilengkapi dengan printer kasir bluetooth menjadikan kesempurnaan dalam aktivitas pembukuan dan transaksi semakin cepat , special untuk usaha kecil dan menengah dapat menggunakan technology mesin kasir murah ini, mewah dan elegan desain hingga kelengkapan akan pembukuan serta transaski menjadikan lebih baik untuk digunakan.</p>
<a href="https://www.youtube.com/watch?v=cRKPNLRBTFU" class="button" target="blank">Video</a>. <a href="/file/portable.pdf" class="button" target="blank">Download</a>.

		   <hr/> <Bio /><hr/></Layout></div>
			   <div class="col-12 col-md-3 p-3 p-md-5text-center"></div>
			   </div>
  )
}

export default MesinkasirPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
