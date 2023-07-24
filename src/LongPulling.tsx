
import axios from "axios";
import React, {useEffect, useState} from "react";

export const LongPulling = () => {
    const [messages, setMessages] = useState<any>([])
    const [value, setValue] = useState('')

    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        try {
          const {data} = await axios.get('http://localhost:5000/get-messages')
          setMessages((prev: any) => [data, ...prev])
          await subscribe()
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
        }
    }

    const sendMessage = async () => {
       await axios.post('http://localhost:5000/new-messages', {
        message: value,
        id: Date.now()
       })
    }
    
    return (
        <div>
            <div>
                {messages.map((mess: any) => 
                <div key={mess.id}>{mess.message}</div>)}
            </div>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" />
            <button onClick={sendMessage}>Отправить</button>
        </div>
    )
}