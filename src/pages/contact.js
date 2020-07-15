import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import contactStyles from '../pages/contact.module.scss'
const Contact = ({data}) =>{
    return(
      <Layout>
        <h1>Contact me</h1>
        <Img fixed={data.contactImg.childImageSharp.fixed} className={`${contactStyles.img} rounded`}/>
        <p>The best way to reach me is via my email <a href="mailto:adrianfamily09@gmail.com">adrianfamily09@gmail.com</a>.</p>
      </Layout>
    )
}

export default Contact

export const query = graphql`
  query {
    contactImg: file(relativePath: { eq: "contact-img.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`