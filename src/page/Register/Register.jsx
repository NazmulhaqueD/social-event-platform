import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';

const Register = () => {

    const { signUp } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const registerData = Object.fromEntries(formData.entries());
        const { email, password } = registerData;

        signUp(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (

        <div className="card bg-base-100 w-full mx-auto my-16 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center mt-6">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className='space-y-4'>
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Your Name" />

                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="Photo Url" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral w-full mt-4">Register</button>
                    <p>Already have an account? <NavLink className={'text-teal-400 underline font-semibold text-xl'}>Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;