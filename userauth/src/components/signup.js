import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { Redirect } from 'react-router';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) =>  {
        e.preventDefault();

        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
            // Signed in 
                var user = userCredential.user;
                console.log(user);
                console.log(user.email);
                
                setEmail('');
                setPassword('');
                <Redirect to="/Profile" />
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
            <h2>Sign Up</h2>
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
            <input type='submit' value='Sign Up' className='btn btn-block' />
            <p>Already have an Account?<Link to='/Login'>Log In</Link> </p>
        </form>
    )
}

export default SignUp