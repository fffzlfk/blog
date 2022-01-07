import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Layout from '../../components/layout'
import Container from '../../components/container'
import { postFilePaths } from '../../lib/mdx-utils'
import mdxToHtml from '../../lib/api'
import PostHeader from '../../components/post-header'
import H2 from '../../components/h2'
import H3 from '../../components/h3'

const components = {
  h2: H2,
  h3: H3,
  Head,
}

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/assets/monokai-sublime.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css" integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" crossOrigin="anonymous" />
      </Head>
      <Container>
        <div className="mb-32">
          <Head>
            <title>
              {frontMatter.title}
            </title>
          </Head>
          <PostHeader
            title={frontMatter.title}
            date={frontMatter.date}
          />
          <div className="mx-1 px-1">
              <article className="prose prose-lg prose-img:rounded-lg dark:prose-invert max-w-none">
                <MDXRemote {...source} components={components} lazy />
              </article>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { mdxSource, data } = await mdxToHtml(params.slug)

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
