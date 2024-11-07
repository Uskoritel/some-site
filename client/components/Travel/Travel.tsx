export default function Travel(){
    return(
        <section className="w-full bg-[#d3e1e0] py-28">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="bg-white min-h-[327px] border rounded-[50px] m-[0_0_0_auto] py-10 pr-10 pl-[325px] shadow-[5px_5px_20px_0_rgba(0,0,0,0.4)] w-[889px]
                     lg:w-full lg:p-[25px] lg:ml-0 lg:pb-[90px] xl:w-[700px] xl:pl-[235px]">
                        <div className="flex flex-col items-start gap-y-6">
                            <h1 className="text-black text-5xl font-bold"> Travel with us </h1>
                            <div className="leading-8 text-xl">
                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                 sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="w-[507px]  h-[507px] rounded-full bg-[url('https://i.pinimg.com/736x/a8/54/d3/a854d30c6135f58a75d62355a2548d98.jpg')] bg-center relative mt-[-313px] ml-[35px]
                         lg:w-[300px] lg:h-[300px] lg:m-[-78px_0_0_auto] xl:w-[400px] xl:h-[400px] "></div>
                        <div className="w-[160px] h-[160px] relative bg-red-400 rounded-full mt-[-100px] ml-[25px] 
                            lg:w-[110px] lg:h-[110px]  lg:m-[-65px_0_0_auto]
                            xl:w-[130px] xl:h-[130px] xl:mt-[-90px] xl:ml-[25px]"></div>
                </div>
            </div>
        </section>
    )
}