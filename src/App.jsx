import React, { Component } from 'react'
import InputField from './InputField'
import Messages from './Messages'


class App extends Component {

    state = {
        messages: [],
        user: {
          name: "Damir",
          color: "blue"
        }
    }

    constructor (){
        super();
        
        this.drone = new window.Scaledrone("RAdRBc9kPhGqhHXS", {
            data: this.state.user
        });
        this.drone.on('open', error => {
            if (error) {
              return console.error(error);
            }
            const user = {...this.state.user};
            user.id = this.drone.clientId;
            this.setState({user});
        });
        const room = this.drone.subscribe("observable-room");
        room.on('data', (data, user) => {
            console.log(data);
            // console.log(user);s
            const messages = this.state.messages;
            messages.push ({user, text: data});
            this.setState({messages});
        });
    }

    sendMessage = (message) =>{
        this.drone.publish({
            room: "observable-room",
            message
          });
    }

    render() {
        console.log(this.state.messages);
        return (
            <div className='App'>
                <div className='heading'><h1>Chat App</h1></div>
                <Messages messages={this.state.messages} user={this.state.user}/>
                <InputField sendMessage={this.sendMessage}/>
            </div>
        )
    }
}

export default App;