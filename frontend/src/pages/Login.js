import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import "../styles/Login.css"
import "../styles/Global.css"

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const{login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="login-container">
            <form className="login" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label>Email Address</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value = {password}/>

                <button disabled = {isLoading} className='login-button'>Login</button>
                <p>Don't have an account? <Link className='signup2-button' to = "/signup">Sign up</Link></p>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default Login