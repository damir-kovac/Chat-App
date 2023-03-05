import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = ({transferUserInfo}) => {

    const [submited, setSubmited] = useState(false);


    const formSubmit = (e) =>{
        e.preventDefault();
        let userInfo = {};
        userInfo.name = e.target[0].value;
        for (const radio of e.target) {
            if( radio.checked === true){
                userInfo.color = radio.value;
            }
        }
        transferUserInfo(userInfo);
        setSubmited(true);
    }

    return (
        <div className="loginPage">
            <h1>Welcome to Chat App</h1>
            {submited 
                ? <> 
                    <p>Enjoy chatting !</p> 
                    <Link to="/ChatRoom"> Enter Chat Room </Link> 
                  </>
                : (
                    <>
                    <p>To enter chat room fill the form with name and color</p>
                    <form id="loginForm" onSubmit={formSubmit}>
                        <input type="text" placeholder='Type your name here' autoFocus={true} required/>
                        <div> 
                            <span>Choose the color :</span>
                            <input type="radio" name="color" id="red" value="rgba(235, 98, 98, 0.52)" required/>
                            <input type="radio" name="color" id="blue" value="rgba(61, 134, 211, 0.52)"/>
                            <input type="radio" name="color" id="green" value="rgba(87, 231, 113, 0.52)"/>
                            <input type="radio" name="color" id="yellow" value="rgba(227, 230, 45, 0.527)"/>
                            <input type="radio" name="color" id="purple" value="rgba(157, 89, 235, 0.527)"/>
                            <input type="radio" name="color" id="grey" value="rgba(138, 138, 138, 0.51)"/>
                            <input type="radio" name="color" id="brown" value="rgba(152, 103, 40, 0.523)"/>
                            <input type="radio" name="color" id="orange" value="rgba(255, 166, 0, 0.677)"/>
                        </div>
                        <button>Submit</button> 
                    </form>
                    </>
                )}
        </div>
    )
}

export default LoginPage