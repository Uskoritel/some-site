import CommentsPaper from "../../components/CommentsPapers/CommentsPaper";
import { cookies } from "next/headers"


export default async function Paper({id: number}){
    
    const cookieStore = await cookies();
    const token: any = cookieStore.get('access_token') ? cookieStore.get('access_token') : undefined


    const res = await fetch('http://localhost:5000/post/1', { 
        cache: 'no-store',
        headers: {
            Authorization: 'Bearer ' + decodeURIComponent(token?.value)
        }
    })
    const post = await res.json();

    // console.log(post)

    return(
        <section className="container mx-auto py-28">
            <div className="border rounded-[35px] shadow-[5px_5px_20px_0_rgba(0,0,0,0.4)] p-20">
                <div style={{'--image-url': `url(http://localhost:5000/${post.picture})`}} 
                     className='bg-[image:var(--image-url)] h-[610px] bg-no-repeat m-auto rounded-[35px] bg-cover'>
                </div>    
                    <div className="mt-10">
                        {post.content}
                    </div> 
                </div>
           <CommentsPaper commentsData={post.comments}/>
        </section>

    )
}