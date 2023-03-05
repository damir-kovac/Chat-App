import React, { useEffect, useState } from 'react'

const Messages = ({userInfo, messages}) => {
    
    const renderMessage = (message,index,userInfo) =>{
        const isMe = message.user.id === userInfo.id;
        const className = isMe ? "message_container me" : "message_container";
        

        return (
            <div className={className} key={index+1}>
                <li className='message'>
                    <div className={isMe ? 'user me' : 'user'} style={{backgroundColor: message.user.clientData.color}}>
                        {isMe ? "Me" : message.user.clientData.name}:
                    </div>
                    <div className='text'>{message.text}</div>
                </li>
            </div>
        )
    }

    return (
        <div id='messages_container' >
            <ul className='messages'>
                {messages.map((message,index) => renderMessage(message,index, userInfo))}
                <div id="scrollhelper"></div>
            </ul>
        </div>
        
    )
}

export default Messages