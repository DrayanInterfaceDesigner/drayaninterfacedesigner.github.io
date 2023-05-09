import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import ArticleCard from '@/components/ArticleCard'
import styles from '../styles/Projects.module.scss'


export default function Articles({ posts }) {
  console.log(posts)
  return (
      <Layout>
        <div className={styles.Projects}>
          <PageTitle title="Articles" type="articles"></PageTitle>
            <div className={styles.Projects__thumbs}>
                {posts.map((post, index) => (
                    <ArticleCard key={index} post={post}></ArticleCard>
                ))}
            </div>
        </div>
      </Layout>
  )
}


export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'articles')
  const filenames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(filenames
    .filter((filename) => filename.endsWith('.md'))
    .map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.promises.readFile(filePath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Use remark to convert Markdown into HTML string
      const contentHtml = await remark().use(html).process(matterResult.content)
      const htmlString = contentHtml.toString()
      

      // Combine the data with the filename and slug
      const slug = filename.replace(/\.md$/, '')
      return {
        slug,
        htmlString,
        ...matterResult.data,
      }
    })
  )
  return {
    props: {
      posts,
    },
  }
}
