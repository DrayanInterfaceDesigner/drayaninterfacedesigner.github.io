import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import PostPage from './projects/[slug]'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import PostCard from '@/components/PostCard'
import styles from '../styles/Projects.module.scss'


export default function Projects({ posts }) {
  return (
      <Layout>
        <div className={styles.Projects}>
          <PageTitle title="Projects" type="projects"></PageTitle>
            <div className={styles.Projects__thumbs}>
                {posts.map((post, index) => (
                    <PostCard key={index} post={post}></PostCard>
                ))}
            </div>
        </div>
      </Layout>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'projects')
  const filenames = fs.readdirSync(postsDirectory)
  const posts = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the filename and slug
      const slug = filename.replace(/\.md$/, '')
      return {
        slug,
        ...matterResult.data,
      }
    })
  return {
    props: {
      posts,
    },
  }
}
