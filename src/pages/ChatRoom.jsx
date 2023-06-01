import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import InputField from '../InputField'
import Messages from '../Messages'


class ChatRoom extends Component {

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

    componentDidMount(){
        this.drone.on('open', error => {
            const user = {...this.state.userInfo, id:this.drone.clientId};
            this.setState({userInfo: user});
        });
        this.room.on('data', (data, user) => {
            const messages = [...this.state.messages, {user, text: data}];
            this.setState({messages: messages});
        });
    }

    render() {
        const color = this.state.userInfo.color;

        if(this.state.userInfo.name){
            return (
                <div className='App'>
                    <div className='heading boxStyling'>
                        <p>Logged in as:  
                            <span style={{backgroundColor: color}}>{this.state.userInfo.name}</span>
                        </p>
                        <h3> Chat Room </h3>
                    </div>
                    <Messages messages={this.state.messages} userInfo={this.state.userInfo}/>
                    <InputField sendMessage={this.sendMessage}/>
                </div>
            )
        } else {
            return (
                <div id='noUser' className='boxStyling'>
                    <p>You are not logged in. Please Log in to enter Chat Room.</p>
                    <Link to="/">Login Page</Link>
                </div>
            )
        }
    }
}

export default ChatRoom;