import React from 'react'
import Layout from '../components/layout'
import indexStyles from '../pages/index.module.scss'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

const Home = ({data}) =>{
  return(
    <Layout>
      <main>
        <article>
          <header className={indexStyles.articleheader}>
            <Img fixed={data.myImage.childImageSharp.fixed} className={`${indexStyles.headerImg}, rounded-circle`}/>
            <hgroup>
              <h2 className={indexStyles.title}>Hi, I'm Adriam Familia</h2>
            </hgroup>
          </header>

          <section>
            <h3>About me</h3>
            <p>
              I'm a Junior in Software Engineering living in San Pedro de Macorís, Dominican Republic.
              I study at <abbr title="Universidad Central del Este">UCE</abbr> and I'm 19 years old. I intend 
              to be a full web stack developer in the future.
            </p>
          </section>
        </article>

        <article>
          <header>
            <hgroup>
              <h3>My skills</h3>
            </hgroup>
          </header>

          <section className={indexStyles.section}>
            <h5>- Programming</h5>
            <Img fixed={data.programmingImg.childImageSharp.fixed} className={`${indexStyles.sectionImg} rounded`} />
            <p className={indexStyles.sectionDescription}>
              When it comes to programming languages I mostly know how to program with C#. I can build Desktop 
              Applications using Windows Forms and Web Applications with ASP.NET. Also I can program in C++.
            </p>
          </section>

          <section className={indexStyles.section}>
            <h5>- Web Development</h5>
            <Img fixed={data.webImg.childImageSharp.fixed} className={`${indexStyles.sectionImg} rounded`} />
            <p className={indexStyles.sectionDescription}>
              I'm capable of building modern, scalable web applications with HTML, CSS, JavaScript, and C#. I can make a 
              <abbr title="Single Page Application"> SPA</abbr> with Ajax JQuery, React JS or an static web page with 
              Gatsby JS. Also I can develop web services wether is a REST API or a SOAP service and make a web app
              consume these services.
            </p>
          </section>

          <section className={indexStyles.section}>
            <h5>- Database</h5>
            <Img fixed={data.databaseImg.childImageSharp.fixed} className={`${indexStyles.sectionImg} rounded`} />
            <p className={indexStyles.sectionDescription}>
              I can desing databases optimized for speed using Microsoft SQL Server, normalize data and mantain data integrity. 
            </p>
          </section>

          <section className={indexStyles.section}>
            <h5>- Business Intelligence</h5>
            <Img fixed={data.businessImg.childImageSharp.fixed} className={`${indexStyles.sectionImg} rounded`} />
            <p className={indexStyles.sectionDescription}>
              I'm able to extract data from a source, transform it into usable information and provide that information to the users. 
              The tools that I know how to use in this field are SQL Server Integration Services and Microsoft Analysis Services.
            </p>
          </section>

          <section className={indexStyles.section}>
            <h5>- Languages</h5>
            <Img fixed={data.languageImg.childImageSharp.fixed} className={`${indexStyles.sectionImg} rounded`} />
            <p className={indexStyles.sectionDescription}>
              As I've lived in Dominican Republic my whole life, my mother tongue is Spanish and is the language that I can be the most fluent at.
              I also learned English because I like it and it's necessary for work and for the field that I'm majoring in.
            </p>
          </section>
        </article>

        <article>
          <header>
              <hgroup>
                <h3>My hobbies</h3>
              </hgroup>
          </header>

          <section className={indexStyles.section}>
            <h5>What I do when I'm not coding?</h5>
            <Img fixed={data.hobbies1Img.childImageSharp.fixed} className={`${indexStyles.sectionImg} rounded`} />
            <Img fixed={data.hobbies2Img.childImageSharp.fixed} className={`${indexStyles.sectionImg} rounded`} />
            <p className={indexStyles.sectionDescription}>
              On my free time I like to read, watch a good tv show or movie, listen to music and go out for a walk.
            </p>
          </section>
        </article>
      </main>
    </Layout>
  ) 
}

export default Home

export const query = graphql`
  query {
    myImage: file(relativePath: { eq: "my-photograph.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    programmingImg: file(relativePath: { eq: "programming-section-img.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    webImg: file(relativePath: { eq: "web-section-img.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    databaseImg: file(relativePath: { eq: "database-section-img.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    businessImg: file(relativePath: { eq: "business-section-img.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    languageImg: file(relativePath: { eq: "language-section-img.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    hobbies1Img: file(relativePath: { eq: "hobbies1-img.jpg" }) {
      childImageSharp {
        fixed(width: 467, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hobbies2Img: file(relativePath: { eq: "hobbies2-img.jpg" }) {
      childImageSharp {
        fixed(width: 467, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`