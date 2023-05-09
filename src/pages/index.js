import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

import Layout from '../components/Layout'
import FitImage from '@/components/FitImage'
import styles from '../styles/Home.module.scss'
import Article from '@/components/Article'


function HomePage({data, content}) {
  return (
    <Layout>
      <div className={styles.HomePage}>
        <div className={styles.HomePageScrollabe}>
        <section className={styles.HomePage__Top}>
          <div className={styles.Hero}>
            <div className={styles.Hero__top}>
              <FitImage src="/images/me.png" alt="Author's Face" options={{margin:'3rem 0', width: '90%'}}></FitImage>
            </div>
            
            <div className={styles.Hero__bottom}>
              <p className={styles.location__text}>Lives in <span className={styles.text__division}>|</span> Brazil - Curitiba (PR)</p>
              <p className={styles.name}>Drayan Silva Magalhães</p>
              <p className={styles.text}>
              Software Developer 
              <span className={styles.text__division}> | </span>UI Designer 
              <span className={styles.text__division}> | </span>Apprentice 
              Researcher and Computer Science Bachelor 
              Student at Pontifícia Universidade Católica 
              do Paraná
              </p>
            </div>
          </div>
        </section>
        <section className={styles.HomePage__Bottom}>
          <Article body={content} data={data}></Article>
        </section>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), 'src', 'pages', 'misc', `aboutme.md`)
  const markdownFile = fs.readFileSync(fullPath).toString()
  const { data, content } = matter(markdownFile)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      data,
      content: contentHtml,
    },
  };
}

export default HomePage