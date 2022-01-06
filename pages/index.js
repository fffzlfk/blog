import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import path from 'path'
import Layout from '../components/layout'
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils'
import { HOME_NAME } from '../lib/constant'
import Container from '../components/container'
import Intro from '../components/intro'
import MoreStories from '../components/more-stories'

export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{HOME_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {posts.length > 0 && <MoreStories posts={posts} />}
      </Container>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { data } = matter(source)

    const allowed = ['title', 'date']
    Object.keys(data)
      .filter(key => !allowed.includes(key))
      .forEach(key => delete data[key]);

    return {
      data,
      filePath,
    }
  })
    .filter(post => post.filePath !== 'about.mdx')
    .sort((post1, post2) => new Date(post2.data.date) - new Date(post1.data.date))

  return { props: { posts } }
}
