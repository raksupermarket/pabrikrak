import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
  <div class="masthead-followup row m-0 bg-white border border-white">
 <div class="col-12 col-md-3 p-3 p-md-5 bg-white text-center"></div>
  <div class="col-12 col-md-6 p-3 p-md-5 bg-white text-center">
    <Layout location={location} title={siteTitle}>
      <SEO title="Hubungi pabrik rak" />
      <h1>Contact Us</h1><hr/><p><img class="img-fluid" src="https://raksupermarket.github.io/img/pabrikrak.jpg" alt="rak pabrik"/></p>
<p>	  
Showroom<br/>
Ruko pasar wisata juanda blok Q.07.<br/>
Juanda - Sidoarjo - Jawa Timur</p>

	  <a href="https://goo.gl/maps/AesyjofbV3ARaH1T6" target="blank"><img alt="lokasi pabrik rak" class="img-fluid" width="100%" src="https://res.cloudinary.com/hockeycorp/image/upload/v1579757778/contact_hockeys_rf8nyk.png"/></a>
      <p>Hubungi kami untuk pertanyaan bantuan dan konsultasi.</p>
	  <a href="https://wa.me/6285646104747" target="blank" rel="nofollow" class="button">Chat</a> <a href="tel:+6285331361404" class="button" rel="nofollow">Call</a> <a href="mailto:hockeycorpmarketing@gmail.com" class="button" rel="nofollow">Email</a> <a href="https://goo.gl/maps/V2Wxp2RcbF3cHxFC6" target="blank" class="button" rel="nofollow">Maps</a>
			  </Layout></div>
			   <div class="col-12 col-md-3 p-3 p-md-5text-center"></div>
			   </div>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
