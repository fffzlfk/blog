import { useTheme } from "next-themes"
import Head from "next/head"

const PostFooter = () => {
    const { theme } = useTheme();
    return (
        <div className='flex items-center w-full justify-center'>
            <Head>
                <script src="https://giscus.app/client.js"
                    data-repo="fffzlfk/blog"
                    data-repo-id="R_kgDOGoMHZA"
                    data-category="Q&A"
                    data-category-id="DIC_kwDOGoMHZM4CA6gl"
                    data-mapping="title"
                    data-reactions-enabled="1"
                    data-emit-metadata="0"
                    data-input-position="bottom"
                    data-theme={theme}
                    data-lang="zh-CN"
                    crossOrigin="anonymous"
                    async>
                </script>
            </Head>
            <div className="giscus"></div>
            <button
                className='pt-8'
                onClick={() => window.scrollTo(0, 0)}><img className='w-10 dark:invert' src='/images/up-arrow.png' /></button>
        </div>
    )
}

export default PostFooter