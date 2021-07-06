import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!email) {
            alert('Invalid value');
        }

        setEmail('');
        setPassword('');
    }

    return (
        <form className='add-form container' onSubmit={onSubmit}>
            <h2>Log In</h2>
            <div className='form-control'>
                <label>Email</label>
                <input 
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={ (e) => setEmail(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input 
                type='password' 
                placeholder='Password' 
                value={password}
                onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <input type='submit' value='Login' className='btn btn-block' />
            <p>Don't have an Account? Sign Up</p>
        </form>
    )
}

export default Login