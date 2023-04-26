import React, { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ChatRoom from './pages/ChatRoom'
import LoginPage from './pages/LoginPage'

const App = () => {

    const [user, setUser] = useState({});
    
    const transferUserInfo = (userInfo) =>{
        setUser(userInfo);
    }

    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<LoginPage transferUserInfo={transferUserInfo} />} />
                <Route path='/ChatRoom' element={<ChatRoom user={user} />} />
            </Routes>
        </HashRouter>
    )
}

export default App