import Link from "next/link";
import CardPost from "../Cards/CardPost";
import { cookies } from "next/headers"
	
	export default async function CreatePaper(){

		const cookieStore = await cookies();
		const token: any = cookieStore.get('access_token') ? cookieStore.get('access_token') : undefined

		const userData = await fetch('http://localhost:5000/auth/user', {
			headers: {
				Authorization: 'Bearer ' + decodeURIComponent(token?.value)
			}
		});
		const user = await userData.json();
		console.log(user, 'WHY ZIS')
			
		const res = await fetch('http://localhost:5000/posts', { 
			cache: 'no-store',
			headers: {
				Authorization: 'Bearer ' + decodeURIComponent(token?.value)
			}
		})
		const posts: Posts[] = await res.json();
	
	return(
		<section className="w-full py-28 bg-[#f37b6d]">
			<div className="container mx-auto"> 
				<div className="flex justify-center items-center">
					<div className="flex w-full flex-col gap-y-4 items-center">
						<h1 className="text-white text-center">Latest news</h1>
						<CardPost posts={posts}/>
						<Link href="/papers">
							<button className="border border-solid bg-transparent py-2 px-4 text-white"> LEARN MORE</button>
						</Link>
					</div>
				</div>

			</div>			
		</section>
	)
}