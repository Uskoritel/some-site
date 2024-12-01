interface PostsProps { 
    title: string,
    content?: string,
    picture: string,
    created_at: string
    _count: { comments: number} 
}


const Post: React.FC<PostsProps> = (post) => {

    const {title, picture, created_at, _count} = post
    const datePost = new Date(created_at).toLocaleDateString()

    return(
        <div className="bg-white h-[420px] rounded-2xl p-6 w-full sm:w-full shadow-[5px_5px_20px_0_rgba(0,0,0,0.4)] ">
        <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-y-[25px]">
            <div style={{'--image-url': `url(http://localhost:5000/${picture})`}} 
                    className='w-full bg-[image:var(--image-url)] h-[255px] bg-no-repeat m-auto rounded-[5px] bg-cover'>
                </div>    
                <div>{title}</div>
            </div>
            <div className="flex">
                <div>Comments {_count.comments}</div> 
                <div>{datePost}</div>
            </div>
        </div>
    </div>
    )
}

export default Post;