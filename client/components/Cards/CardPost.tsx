import Post from "./Post/Post"

interface Posts { 
    title: string,
    content?: string,
    picture: string,
    created_at: string,
    _count: { comments: number}
}

interface PostsProps{
    posts: Posts[]
}


const CardPost: React.FC<PostsProps> = ({posts}) => {
       
    return(
        <div className="grid grid-cols-paper gap-[25px]	md:grid-cols-paperMd lg:grid-cols-paperLg w-full">
            {
                posts.map((post, index) => {
                    return(
                          <Post key={post.title}
                                title={post.title}
                                content={post.content}
                                picture={post.picture}
                                created_at={post.created_at}
                                _count={post._count}
                        />
                    )
                })
            }
            
         </div>
        )
}

export default CardPost;