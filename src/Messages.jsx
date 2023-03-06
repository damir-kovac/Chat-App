import React, { useEffect, useRef, useState } from 'react'

const Messages = ({userInfo, messages}) => {

    const messages_container = useRef();
    
    const renderMessage = (message,index,userInfo) =>{
        const isMe = message.user.id === userInfo.id;
        const className = isMe ? "message_container me" : "message_container";


        return (
            <div className={className} key={index+1}>
                <li className='message'>
                    <div className={isMe ? 'user me' : 'user'} style={{backgroundColor: message.user.clientData.color}}>
                        {isMe ? "me" : message.user.clientData.name}:
                    </div>
                    <div className='text'>{message.text}</div>
                </li>
            </div>
        )
    }

    useEffect(()=>{
        messages_container.current.scrollTop = messages_container.current.scrollHeight;
    },)

    return (
        <div id='messages_container' className='boxStyling' ref={messages_container}>
            <ul className='messages'>
                {messages.map((message,index) => renderMessage(message,index, userInfo))}
                <div id="scrollHelper"></div>
            </ul>
        </div>
    )
}

export default Messages