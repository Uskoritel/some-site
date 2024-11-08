import FormReg from "../FormReg/FormReg";

export default function CreateOrIn(){     

    return(
        <section className="w-full relative bg-[#476160]">
            <div className="container py-20 mx-auto w-full h-full">
                <div className="flex flex-col items-center">
                    <div className="bg-no-repeat bg-cover bg-center border-[#f67b6f] border-solid border-[20px] rounded-full w-[792px] h-[792px] bg-[url(https://i.pinimg.com/originals/2b/98/7a/2b987a0b0afe8c28915eb0f83dab75aa.jpg)] relative
                                    xl:w-[600px] xl:h-[600px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] "></div>
                    <div className="relative flex flex-col bg-white rounded-[45px] shadow-[5px_5px_20px_0_rgba(0,0,0,0.4)] p-8 gap-8  w-[506px] min-h-[468px] m-[-234px_0_0_50%] xl:w-[450px] lg:m-[-100px_0_0_0] sm:w-full">
                        <div>
                            <h1 className="text-5xl mb-[25px]">Create Account</h1>
                            <div className="flex">
                                <FormReg/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}