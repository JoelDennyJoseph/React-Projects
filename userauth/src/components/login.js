import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.email);
                
                setEmail('');
                setPassword('');
                history.push("/Profile");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("Error code: " + errorCode + "\nError Message: " + errorMessage);
            }
        );
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
            <p>Don't have an Account? <Link to='/Signup'>Sign Up</Link> </p>
        </form>
    )
}

export default Login