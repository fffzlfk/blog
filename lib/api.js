import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { POSTS_PATH } from '../lib/mdx-utils'
import remarkGfm from 'remark-gfm'
import markdown from "remark-parse";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import emoji from 'remark-emoji';
import remarkToc from 'remark-toc'
import * as shiki from 'shiki'
import withShiki from '@stefanprobst/remark-shiki'

export default async function mdxToHtml(slug) {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)

    let source;
    try {
        source = fs.readFileSync(postFilePath)
    } catch (e) {
        source = fs.readFileSync(postFilePath.slice(0, -1))
    }

    const { content, data } = matter(source)

    const allowed = ['title', 'date']
    Object.keys(data)
        .filter(key => !allowed.includes(key))
        .forEach(key => delete data[key])

    const highlighter = await shiki.getHighlighter({ theme: 'material-ocean' })

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [
                markdown,
                remarkGfm,
                remarkMath,
                [remarkToc, { maxDepth: 3 }],
                [withShiki, { highlighter }],
                emoji,
            ],
            rehypePlugins: [rehypeKatex],
        },
        scope: data,
    })

    return {
        mdxSource,
        data
    }
}