import { useState } from 'react'
import './index.css'
import SignUp from './Components/SignUp'
import Authenticate from './Components/Authenticate'

export default function App() {
    const [token, setToken] = useState(null);
    return (
        <>
        <SignUp token={token} setToken={setToken}/>
        <Authenticate token={token} setToken={setToken}/>
        </>
    );
}