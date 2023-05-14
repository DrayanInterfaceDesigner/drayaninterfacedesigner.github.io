import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import Article from '@/components/Article'
import Hero from '@/components/Hero'


function HomePage({data, content}) {
  return (
    <Layout>
      <div className={styles.HomePage}>
          <section className={styles.HomePage__Top}>
            <Hero></Hero>
          </section>
          <section id="about" className={`${styles.HomePage__Bottom}`}>
            <Article body={content} data={data}></Article>
          </section>
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