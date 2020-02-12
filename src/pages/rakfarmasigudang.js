import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RakfarmasigudangPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
  <div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-3 p-3 p-md-5 bg-white"></div>
  <div class="col-12 col-md-6 p-3 p-md-5 bg-white">
    <Layout location={location} title={siteTitle}>
      <SEO title="Rak farmasi laboratorium dan rak gudang warehouse heavy dutty" />
      <h1><strong><a href="rakfarmasigudang" title="rak farmasi dan gudang">Rak Farmasi Gudang</a></strong></h1><hr/>
	  <img alt="Rak farmasi laboratorium dan rak gudang warehouse heavy dutty" class="img-fluid rounded shadow shadow-lg" src="/img/rak GUDANG supermarket TOKO MINIMARKET.jpg"/>
<p>	  
Rak gudang atau rak grosir sejenis dengan <a href="rakfarmasigudang" title="rak farmasi laboratorium">rak farmasi rak laboratorium</a> dalam masing masing fungsi nya. diproduksi dengan bahan baku pilihan full besi yang kuat awet kokoh dan tahan lama menjadikan lebih baik dalam menunjang kebutuhan warehouse gudang anda , selain itu dengan knock down system memudahkan dalam pemasangan dan perakitan nya untuk kebutuhan usaha anda.
</p>
	  <img alt="Rak farmasi laboratorium dan rak gudang warehouse heavy dutty" class="img-fluid rounded shadow shadow-lg" src="/img/rakfarmasilab.jpg"/>
<p>Desain minimalis modern menjadikan lebih cantik dari estetika desain dan kuat dalam menahan beban yang berat, dan dengan finishing powder coating di oven menjadikan lebih baik dalam kebutuhan pewarnaan sehingga warna menjadi tahan lama ketika berada di suhu minus dan biasanya digunakan pada rak farmasi rak laboratorium dan BPOM menggunakan rak farmasi rak laboratorium <a href="rakfarmasigudang" title="rak gudang warehouse">rak gudang</a> grosir kami ini dalam kebutuhan nya.</p>
	  <img alt="Rak farmasi laboratorium dan rak gudang warehouse heavy dutty" class="img-fluid rounded shadow shadow-lg" src="/img/rakgudangwarehouse.jpg"/>
<p>Untuk pemilihan warna sendiri anda bebas untuk memilih warna sesuai dengan selera anda atau bisa disamakan dengan warna cat dinding ruangan anda, sehingga selain merapikan produk produk gudang maupun lab anda juga mampu untuk mempercantik ruangan usaha.</p>
<p>harga produksi nya juga setara dengan kualitas dalam kebutuhan usaha anda sehingga lebih baik untuk digunakan pada usaha anda baik untuk menahan beban berat maupun untuk mempercantik ruangan usaha anda.</p>
<p>Demo video klik dibawah ini</p>
<a href="https://www.youtube.com/watch?v=ltrLq06W9pI&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=111&t=8s" class="button" target="blank">Pemasangan</a>.
<a href="https://www.youtube.com/watch?v=yjw9tzvBjo0&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=67&t=0s" class="button" target="blank">Kekuatan</a>.
<a href="https://www.youtube.com/watch?v=mDWw65xOR58&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=45&t=5s" class="button" target="blank">Farmasi</a>.
<a href="https://www.youtube.com/watch?v=GHwwfzmFkI4&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=114&t=0s" class="button" target="blank">Warehouse</a>
		  <hr/> <Bio /><hr/> </Layout></div>
			   <div class="col-12 col-md-3 p-3 p-md-5text-center"></div>
			   </div>
  )
}

export default RakfarmasigudangPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
