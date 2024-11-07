'use client'

import { useState } from "react"
import Comment from "./Comment";


export default function CommentsPaper({commentsData}){

     const [content, setContent] = useState('');
     const [comments, setComments] = useState(commentsData ? commentsData : []); 

     const sendComm = async () => { 
        
        const res = await fetch('http://localhost:5000/post/comment/', { 
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({postId: 1, content: content})
        })
      
         const comm = await res.json();   

        setComments([...comments, comm])

    }

    return(
        <section>
            <div className="border rounded-[35px] shadow-[5px_5px_20px_0_rgba(0,0,0,0.4)] p-20 mt-10">
                <div className="flex flex-col">
                    <textarea placeholder="Введите сообщение" onChange={(e) => setContent(e.target.value)} className="outline-none border-[1px] border-solid border-gray-300 rounded-[8px] p-[20px]"></textarea>
                    <button className="outline-none w-[110px] h-[40px] text-white bg-purple-400 mt-4" onClick={() => sendComm()}>Отправить</button>
                </div>
            </div>
            <div className="flex flex-col-reverse">
                {comments ? 
                    comments.map( (el, index) => {
                        return(
                            <Comment key={index} content={el.content} date={el.created_at}/>
                        )
                    })
                 : ''
                }
            </div>
        </section>
    )

}