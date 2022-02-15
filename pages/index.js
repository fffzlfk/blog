import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import path from 'path'
import Layout from '../components/layout'
import { postFilePaths, POSTS_PATH } from '../lib/mdx-utils'
import { HOME_NAME } from '../lib/constant'
import Container from '../components/container'
import Intro from '../components/intro'
import MoreStories from '../components/more-stories'
import { useState } from 'react'
import Pagination from '../components/pagination'

const MAX_POSTS = 6;

export default function Index({ posts }) {
  const [page, setPage] = useState(1);
  const count = Math.round((posts.length + MAX_POSTS - 1) / MAX_POSTS);
  posts = posts.slice((page - 1) * MAX_POSTS, (page - 1) * MAX_POSTS + MAX_POSTS);

  return (
    <Layout>
      <Head>
        <title>{HOME_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {posts.length > 0 && <MoreStories posts={posts} />}
        <Pagination
          count={count}
          page={page}
          setPage={setPage}
        />
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
