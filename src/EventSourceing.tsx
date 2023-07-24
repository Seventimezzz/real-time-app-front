
import axios from "axios";
import React, {useEffect, useState} from "react";

export const EventSourcing = () => {
    const [messages, setMessages] = useState<any>([])
    const [value, setValue] = useState('')

    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        const eventSource = new EventSource('http://localhost:5000/connect')
        eventSource.onmessage = function (event) {
            const message = JSON.parse(event.data);
            setMessages((prev: any) => [message, ...prev]);
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