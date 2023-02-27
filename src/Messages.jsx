import React from 'react'

const Messages = ({messages,user}) => {

    const renderMessage = (message,index,user) =>{
        console.log(message);
        return (
            <div className='message_contaisner' key={index+1}>
                <li className='message'>
                    <div className='message_user'>{message.user.clientData.name}</div>
                    <div>{message.text}</div>
                </li>
            </div>
        )
    }

    return (
        <div id='messages_container'>
            <ul className='messages'>
                {messages.map((message,index) => renderMessage(message,index,user))}
            </ul>
        </div>
    )
}

export default Messages