import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { POSTS_PATH } from '../utils/mdxUtils'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import markdown from "remark-parse";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeHighlight from 'rehype-highlight'
export default async function mdxToHtml(slug) {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    // const mS = String(await compile(content, {
    //     remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMath],
    //     rehypePlugins: [rehypeKatex, rehypeHighlight],
    // }))

    // console.log(mS)

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [markdown, remarkGfm, remarkFrontmatter, remarkMath],
            rehypePlugins: [rehypeKatex, rehypeHighlight],
        },
        scope: data,
    })

    return {
        mdxSource,
        data
    }
}