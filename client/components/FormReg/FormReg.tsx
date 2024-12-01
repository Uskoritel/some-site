'use client'

import { useState, MouseEventHandler, ChangeEventHandler} from "react";

interface userData {
  name: string,
  email: string,
  password: string
}

export default function FormReg(){

          const [auth, setAuth] = useState('false')

          const [formData, setFormData] = useState<userData>({
            name: '',
            email: '',
            password: ''
          })
  
        const inputDate: ChangeEventHandler<HTMLInputElement> = (e) => {
            setFormData({   
                            ...formData,
                            [e.target.name] : e.target.value
                        })
        }


        const handleForm: MouseEventHandler<HTMLElement> = async(e) => {
   
                  e.preventDefault();
                  const query = await fetch('http://localhost:5000/auth/register', {
                    method: 'POST',
                    headers: {
                      'Content-Type':'application/json'
                    },
                    body:  JSON.stringify(formData)
                  })
                  const data = await query.json()
                  document.cookie = `access_token=${encodeURIComponent(data.access_token)}`
        }

    return(
            <form className="flex flex-col gap-[8px]">

                <label htmlFor="name">Name</label>
                <input type="text" name="name"  className="form_input" onChange={inputDate}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email"  className="form_input" onChange={inputDate}/>

                <label htmlFor="name">Password</label>
                <input type="password" name="password" className="form_input" onChange={inputDate}/>

                <button className="outline-none w-[110px] h-[40px] text-white bg-green-300 mt-4" type="submit" onClick={handleForm}>Отправить</button>
            </form>
    )
}



