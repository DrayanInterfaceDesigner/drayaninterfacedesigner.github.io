import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import Article from '@/components/Article'
import Layout from '@/components/Layout'

export default function ProjectPage({ content, data }) {
  return (
      <Layout>
        <Article body={content} data={data}></Article>
      </Layout>
  )
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'projects')
  const fileNames = fs.readdirSync(postsDirectory)

  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const fullPath = path.join(process.cwd(), 'src', 'pages', 'projects', `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      content: contentHtml,
      data,
    },
  }
}
