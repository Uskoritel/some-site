import Image from "next/image";


export default function CreatePaper(){
	return(
		<section className="w-full py-28 bg-[#f37b6d]">
			<div className="container mx-auto"> 
				<div className="flex justify-center items-center">
					<div className="flex w-full flex-col gap-y-4 items-center">
						<h1 className="text-white text-center">Latest news</h1>
							<div className="grid grid-cols-paper gap-[25px]	 md:grid-cols-1 lg:grid-cols-paperLg md:grid-cols-paperMd w-full">
								<div className="bg-white h-[380px] rounded-2xl p-6 sm:w-full">
									<div className="flex flex-col h-full justify-between">
										<div className="flex flex-col">
											<div className="w-full h-60 bg-[url('https://i.pinimg.com/736x/8c/d5/b3/8cd5b357964f6900a8e7c1ec492da453--retro-rocket-rocket-launch.jpg')]">
											</div>
											<div>Some Text</div>
										</div>
										<div className="flex">
											<div>Fri Jun 19 2020</div>
											<div>Comments 0</div> 
										</div>
									</div>
								</div>
								<div className="bg-white h-[380px] rounded-2xl p-6 sm:w-full">
									<div className="flex flex-col h-full justify-between">
										<div className="flex flex-col">
											<div className="w-full h-60 bg-[url('https://i.pinimg.com/736x/8c/d5/b3/8cd5b357964f6900a8e7c1ec492da453--retro-rocket-rocket-launch.jpg')]">
											</div>
											<div>Some Text</div>
										</div>
										<div className="flex">
											<div>Fri Jun 19 2020</div>
											<div>Comments 0</div> 
										</div>
									</div>
								</div>
								<div className="bg-white h-[380px] rounded-2xl p-6 sm:w-full">
									<div className="flex flex-col h-full justify-between">
										<div className="flex flex-col">
											<div className="w-full h-60 bg-[url('https://i.pinimg.com/736x/8c/d5/b3/8cd5b357964f6900a8e7c1ec492da453--retro-rocket-rocket-launch.jpg')]">
											</div>
											<div>Some Text</div>
										</div>
										<div className="flex">
											<div>Fri Jun 19 2020</div>
											<div>Comments 0</div> 
										</div>
									</div>
								</div>
							</div>
						<button className="border border-solid bg-transparent py-2 px-4 text-white"> LEARN MORE</button>
					</div>
				</div>

			</div>			
		</section>
	)
}