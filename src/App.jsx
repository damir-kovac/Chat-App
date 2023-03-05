import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatRoom from './pages/ChatRoom'
import LoginPage from './pages/LoginPage'

const App = () => {

    const [user, setUser] = useState({});
    
    const transferUserInfo = (userInfo) =>{
        setUser(userInfo);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage transferUserInfo={transferUserInfo} />} />
                <Route path='/ChatRoom' element={<ChatRoom user={user} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App