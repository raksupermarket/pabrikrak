import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AlarmPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
  <div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-3 p-3 p-md-5 bg-white"></div>
  <div class="col-12 col-md-6 p-3 p-md-5 bg-white">
    <Layout location={location} title={siteTitle}>
      <SEO title="Alarm security toko baju supermarket" />
      <h1><strong><a href="alarm" title="Alarm security toko baju supermarket">ALARM SECURITY</a></strong></h1><hr/>
	  <img alt="alarm security" class="img-fluid rounded shadow shadow-lg" src="/img/SENSOR-ALARM-SECURITY-SYSTEM-SUPERMARKET-TOKO-BAJU-BUTIK-terbaru.jpg"/>
<p>
Alarm security sangat dibutuhkan dalam menjaga keamanan aset usaha anda, dengan <a href="alarm" title="Alarm security toko baju supermarket">alarm security</a> ini maka anda dapat menangkap langsung tangan jahil pencuri include dengan barang buktinya secara langsung, diproduksi dengan system yang mudah digunakan plug and play tanpa software semakin memudahkan anda dalam operasional pemasangan nya.
</p>
	  <img alt="meja kasir terbaru" class="img-fluid rounded shadow shadow-lg" src="/img/TIANG-ALARM-SUPERMARKET-TOKO-BAJU-BUTIK.jpg"/>
<p>Cara penggunaan nya pun sangat mudah tinggal dipasangkan pada pintu keluar pengunjung saja, dengan one gate system maka alarm ini mampu membaca sisi kiri dan sisi kanan masing masing 75cm seperti banyak digunakan pada supermarket modern seperti careffour giant hypermart banyak menggunakan system alarm ini untuk menjaga barang barang nya dari pencuri.</p>
<p>System kerja
pada system kerjanya menggunakan sensor untuk ditempelkan pada produk produk hal ini diperlukan untuk menditeksi apabila sensor belum terlepas dari produk maka alarm ini akan berbunyi dan ini berarti bahwa ada produk anda yang diambil oleh pencuri jadi dengan mudah security anda menangkap langsung pencuri tersebut plus barang bukti.
Pada penggunaan nya adalah jika terdapat produk yang tertempel oleh sensor maka pada saat transaksi kasir di mesin kasir anda wajib menyiapkan pelepas sensor hal ini agar pelanggan dapat meninggalkan tempat usaha anda setelah berbelanja tanpa alarm berbunyi. Pada paket alarm security untuk supermarket minimarket atau toko baju ini juga sudah kami sediakan set lengkap alarm system mulai dari tiang alarm , pelepas sensor, dan sensor untuk ditempelkan ke produk produk anda.</p>
<p>
<a href="alarm" title="Alarm security toko baju supermarket">ALARM PAKET SET</a><br/>
Alarm paket kami sudah siap untuk anda gunakan ditempat anda , terdiri dari : 1 tiang alarm , 100 sensor , 1 Pelepas sensor , Siap pakai tinggal plug and play
</p>
<p>Demo video klik dibawah ini</p>
<a href="https://www.youtube.com/watch?v=JUM7ZPjBK4Y&t=9s" class="button" target="blank">Demo</a>.
		   <hr/> <Bio /><hr/></Layout></div>
			   <div class="col-12 col-md-3 p-3 p-md-5text-center"></div>
			   </div>
  )
}

export default AlarmPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
