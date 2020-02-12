import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
		<div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-12 p-0 p-md-0 bg-white border border-light text-center">
 <img alt="Mesin kasir" class="img-fluid" width="100%" src="/img/PABRIK RAK PROSES PRODUKSI.jpg"/>
 </div>
    <div class="col-12 col-md-12 p-3 p-md-5 bg-white border border-light">
      <SEO title="pabrik rak supermarket,rak minimarket,rak toko,meja kasir,mesin kasir " />
      <Bio />
	  </div>
	   <div class="col-12 col-md-12 p-0 p-md-0 bg-white border border-light text-center">
 <img alt="rak supermarket" class="img-fluid" width="100%" src="/img/tokojualmesinkasir.png"/>
 </div>
    <div class="col-12 col-md-12 p-3 p-md-5 bg-light text-center border border-light">
   <p><strong>PABRIK RAK SUPERMARKET MINIMARKET RAK TOKO MEJA KASIR</strong><br/>Produksi rak supermarket rak minimarket rak toko rak display dan meja kasir serta mesin kasir system live proses produksi langsung.</p>
<a class="button" href="https://www.youtube.com/watch?v=CEUwUkGRFgM&list=PLQDm6k9_HvYP5hlwkvNRYFColHFkyeRlM&index=22" target="blank">More info</a>
	  </div>
	   <div class="col-12 col-md-6 p-0 p-md-0 bg-white border border-light text-center">
	   <Link title="rak supermarket murah,rak minimarket murah,rak toko murah" to="rakmurah">
 <img alt="rak supermarket murah,rak minimarket murah,rak toko murah" class="img-fluid" width="100%" src="/img/rakmurah.jpg"/></Link>
 <p>Rak murah ram jaring display</p>
 </div>
   <div class="col-12 col-md-6 p-0 p-md-0 bg-white border border-light text-center">
   <Link title="rak supermarket minimalis,rak minimarket minimalis,rak toko minimalis" to="rakminimalis">
 <img alt="rak supermarket terbaru,rak minimarket terbaru,rak toko terbaru" class="img-fluid" width="100%" src="/img/rakminimalis.jpg"/>
 </Link>
 <p>Rak Minimalis Concept</p>
</div>
    <div class="col-12 col-md-8 p-0 p-md-0 bg-white border border-light text-center">
	<Link title="rak farmasi rak gudang" to="rakfarmasigudang">
 <img alt="rak farmasi laboratorium rak gudang warehouse" class="img-fluid" width="100%" src="/img/rak GUDANG supermarket TOKO MINIMARKET.jpg"/>
  </Link>
  <p>Rak Farmasi lab & Gudang Warehouse</p>
 </div>
     <div class="col-12 col-md-4 p-0 p-md-0 bg-white border border-light text-center">
	 <Link to="mejakasir" title="meja kasir">
 <img alt="meja kasir" class="img-fluid" width="100%" src="/img/meja kasir mewah 180 deluxe.jpg"/>
  </Link>
  <p>Meja Kasir Besi</p>
 </div>
     <div class="col-12 col-md-8 p-0 p-md-0 bg-white border border-light text-center">
	 <Link to="alarm">
 <img alt="alarm security system" class="img-fluid" width="100%" src="/img/SENSOR-ALARM-SECURITY-SYSTEM-SUPERMARKET-TOKO-BAJU-BUTIK-terbaru.jpg"/>
  </Link>
  <p>Alarm Security</p>
 </div>
     <div class="col-12 col-md-4 p-0 p-md-0 bg-white border border-light text-center">
	  <Link to="mesinkasir">
 <img alt="mesin kasir" class="img-fluid" width="100%" src="/img/TOUCHSCREEN6.png"/>
 </Link> <p>Mesin Kasir System</p>
 </div>
     <div class="col-12 col-md-12 p-3 p-md-5 bg-light text-center border border-light">
   <p><strong>PERLENGKAPAN TOKO</strong><br/>Kami solusi kebutuhan untuk perlengkapan toko perlengakapan supermarket minimarket shop store usaha dan bisnis mu.</p>
<a class="button" href="/file/daftarharga.pdf">Download</a>
	  </div>
	       <div class="col-12 col-md-4 p-3 p-md-5 bg-dark text-white border border-dark text-center">
 <img alt="desain toko supermarket shop store outlet modern" class="img-fluid" src="/img/design interior toko.png"/>
 <p><strong>Design</strong><br/>Desain interior penataan rak display dan meja kasir hingga mesin kasir sesuai dengan kondisi ruangan dan bangunan usaha anda.</p>
 </div>
     <div class="col-12 col-md-4 p-3 p-md-5 bg-dark text-white border border-dark text-center">
 <img  alt="kalkulasi anggaran pembukaan toko usaha baru" class="img-fluid" src="/img/kalkulasi anggaran belanja buka toko.png"/>
  <p><strong>Calculation</strong><br/>Kalkulasi total anggaran belanja untuk kebutuhan pembukuaan toko usaha baru atau peremajaan dengan rak display modern sesuai denah.</p>
 </div>
     <div class="col-12 col-md-4 p-3 p-md-5 bg-dark text-white border border-dark text-center">
 <img alt="konsultasi toko usaha bisnis" class="img-fluid" src="/img/konsultasi bisnis.png"/>
  <p><strong>Consultation</strong><br/>Konsultasi mengenai kebutuhan untuk konsep usaha dan toko bisnis untuk hasil terbaik.</p>
 </div>
     <div class="col-12 col-md-12 p-3 p-md-5 bg-white border border-light">
   {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
		<article key={node.fields.slug}>
  <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 8),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
         <hr/> </article>
        )
      })}
	     </div> 
		      <div class="col-12 col-md-12 p-3 p-md-5 bg-dark text-white border border-dark text-center">
			  <p>Kini saat nya anda bergabung dengan kami untuk masa depan terbaik bagi usaha dan bisnis.</p>
			  </div>
     <div class="col-12 col-md-4 p-0 p-md-0 bg-dark text-white border border-dark text-center">
 <img alt="rak supermarket" class="img-fluid" width="100%" src="/img/rak supermarket,minimarket,rak toko,meja kasir,rak gudang farmasi,mesin kasir (80).jpg"/>
 </div>
      <div class="col-12 col-md-4 p-0 p-md-0 bg-dark text-white border border-dark text-center">
 <img alt="rak supermarket" class="img-fluid" width="100%" src="/img/rak supermarket,minimarket,rak toko,meja kasir,rak gudang farmasi,mesin kasir (108).jpg"/>
 </div>
     <div class="col-12 col-md-4 p-0 p-md-0 bg-dark text-white border border-dark text-center">
 <img alt="rak supermarket" class="img-fluid" width="100%" src="/img/raktoko rak supermarket minimarket almarbur (8).jpg"/>
 </div>
     <div class="col-12 col-md-4 p-0 p-md-0 bg-dark text-white border border-dark text-center">
 <img alt="rak supermarket" class="img-fluid" width="100%" src="/img/rak supermarket,minimarket,rak toko,meja kasir,rak gudang farmasi,mesin kasir,koperasi (6).jpg"/>
 </div>
      <div class="col-12 col-md-4 p-0 p-md-0 bg-dark text-white border border-dark text-center">
 <img alt="rak supermarket" class="img-fluid" width="100%" src="/img/rak supermarket,minimarket,rak toko,meja kasir,rak gudang farmasi,mesin kasir (120).jpg"/>
 </div>
     <div class="col-12 col-md-4 p-0 p-md-0 bg-dark text-white border border-dark text-center">
 <img alt="rak supermarket" class="img-fluid" width="100%" src="/img/rak supermarket,minimarket,rak toko,meja kasir,rak gudang farmasi,mesin kasir,koperasi (3).jpg"/>
 </div>
     <div class="col-12 col-md-12 p-3 p-md-5 bg-light text-center border border-light">
   <p><strong>PERLENGKAPAN TOKO</strong><br/>Kami solusi kebutuhan untuk perlengkapan toko perlengakapan supermarket minimarket shop store usaha dan bisnis mu.</p>
<Link class="button" to="/contact">Contact Us</Link>
	  </div>

		 </div>
</Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
