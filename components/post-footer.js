const PostFooter = () => {
    return (
        <div className='flex items-center w-full justify-center'>
            <button
                className='pt-8'
                onClick={() => window.scrollTo(0, 0)}><img className='w-10 dark:invert' src='/images/up-arrow.png' /></button>
        </div>
    )
}

export default PostFooter