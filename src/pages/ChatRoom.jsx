import React, { Component } from 'react'
import InputField from '../InputField'
import Messages from '../Messages'


class ChatRoom extends Component {

    initialize = () =>{
        this.drone.on('open', error => {
            const user = {...this.state.userInfo, id:this.drone.clientId};
            this.setState({userInfo: user});
        });
        this.room.on('data', (data, user) => {
            const messages = [...this.state.messages, {user, text: data}];
            this.setState({messages: messages});
        });
    }

    sendMessage = (message) =>{
        this.drone.publish({
            room: "observable-room",
            message
          });
    }

    state = {
        messages: [],
        userInfo: this.props.user
    }

    drone = new window.Scaledrone("RAdRBc9kPhGqhHXS", {
        data: this.state.userInfo
    });
    room = this.drone.subscribe("observable-room");


    render() {
        this.initialize();
        const color = this.state.userInfo.color;

        return (
            <div className='App'>
                <div className='heading'>
                    <p>Logged in as:  
                        <span style={{backgroundColor: color}}>{this.state.userInfo.name}</span>
                    </p>
                    <h3> Chat Room </h3>
                </div>
                <Messages messages={this.state.messages} userInfo={this.state.userInfo}/>
                <InputField sendMessage={this.sendMessage}/>
            </div>
        )
    }
}

export default ChatRoom;