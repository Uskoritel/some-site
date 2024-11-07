export default function Comment({content, date}){

    return(
            <div className="border rounded-[35px] shadow-[5px_5px_20px_0_rgba(0,0,0,0.4)] p-20 mt-10">
                <div className="flex flex-col">
                    {content}
                </div>
            </div>
    )

}