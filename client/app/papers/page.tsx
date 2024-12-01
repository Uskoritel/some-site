import CardPost from "@/components/Cards/CardPost";
import { cookies } from "next/headers"

interface Posts { 
    title: string,
    content: string,
    picture: string,
    created_at: string
    _count: { comments: number}
}

export default async function Papers(){
    
    const cookieStore = await cookies();
    const token: any = cookieStore.get('access_token') ? cookieStore.get('access_token') : undefined

    console.log(token);

    const res = await fetch('http://localhost:5000/posts', { 
        cache: 'no-store',
        headers: {
            Authorization: 'Bearer ' + decodeURIComponent(token?.value)
        }
    })
    const posts: Posts[] = await res.json();

    return(
        <section className="container mx-auto py-28">                  
                <CardPost posts={posts}/>            
        </section>

    )
}