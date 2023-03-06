import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = ({transferUserInfo}) => {

    const red = "rgba(235, 98, 98, 0.52)";
    const blue= "rgba(61, 134, 211, 0.52)";
    const green= "rgba(87, 231, 113, 0.52)";
    const yellow = "rgba(227, 230, 45, 0.527)";
    const purple = "rgba(157, 89, 235, 0.527)";
    const grey = "rgba(138, 138, 138, 0.51)";
    const orange = "rgba(255, 166, 0, 0.677)";

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
        <div className="loginPage boxStyling">
            <h1>Chat App</h1>
            {submited 
                ? <> 
                    <p>Enjoy chatting !</p> 
                    <Link to="/ChatRoom"> Enter Chat Room </Link> 
                  </>
                : (
                    <>
                    <p>Welcome to chat App. To enter chat room fill the form with name and color.</p>
                    <form id="loginForm" onSubmit={formSubmit}>
                        <input type="text" placeholder='Type your name here' autoFocus={true} required/>
                        <p>Choose the color :</p>
                        <div id='colors'> 
                            <div>
                                <input type="radio" name="color" id="red" value={red} required/>
                                <label htmlFor="red" style={{backgroundColor: red}}>Red</label>
                            </div>
                            <div>
                                <input type="radio" name="color" id="blue" value={blue}/>
                                <label htmlFor="blue" style={{backgroundColor: blue}}>Blue</label>
                            </div>
                            <div>
                                <input type="radio" name="color" id="green" value={green}/>
                                <label htmlFor="green" style={{backgroundColor: green}}>Green</label>
                            </div>
                            <div>
                                <input type="radio" name="color" id="yellow" value={yellow}/>
                                <label htmlFor="yellow" style={{backgroundColor: yellow}}>Yellow</label>
                            </div>
                            <div>
                                <input type="radio" name="color" id="purple" value={purple}/>
                                <label htmlFor="purple" style={{backgroundColor: purple}}>Purple</label>
                            </div>
                            <div>
                                <input type="radio" name="color" id="grey" value={grey}/>
                                <label htmlFor="grey" style={{backgroundColor: grey}}>Grey</label>
                            </div>
                            <div>
                                <input type="radio" name="color" id="orange" value={orange}/>
                                <label htmlFor="orange" style={{backgroundColor: orange}}>Orange</label>
                            </div>
                        </div>
                        <button>Submit</button> 
                    </form>
                    </>
                )}
        </div>
    )
}

export default LoginPage