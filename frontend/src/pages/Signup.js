import { useState } from "react"
import { Link } from 'react-router-dom';
import { useSignup } from "../hooks/useSignup";
import "../styles/Signup.css"
import "../styles/Global.css"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div className="signup-container">
            <form className="signup" onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <label>Email Address</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value = {email}/>
                <label>Password</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} value = {password}/>
                <button disabled = {isLoading} className='signup-button'>Sign up</button>
                <p>Have an account? <Link className='login2-button' to = "/login">Log in</Link></p>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Signup