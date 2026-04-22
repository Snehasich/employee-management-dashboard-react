import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        
        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600'>
        <form 
        onSubmit={(e) => {
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center p-20'>
            <input 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            required 
            className='text-white placeholder:text-gray-400 outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full' type="email" placeholder='Enter your email'
            />
            <input 
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            required 
            className='text-white placeholder:text-gray-400 outline-none bg-transparent border-2 mt-3 border-emerald-600 text-xl py-4 px-5 rounded-full' type="password" placeholder='Enter password' />
            <button className='text-white mt-5 placeholder:text-white outline-none border-none bg-emerald-600 text-xl py-4 px-5 rounded-full w-full' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
