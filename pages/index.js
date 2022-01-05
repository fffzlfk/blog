import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import path from 'path'
import Layout from '../components/layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
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
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })
    .filter(post => post.filePath !== 'about.mdx')
    .sort((post1, post2) => post1.data.date > post2.data.date)

  return { props: { posts } }
}
