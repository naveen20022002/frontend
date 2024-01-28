import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const RegisterPage = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev){
    ev.preventDefault();
    try{
      await axios.post('/register', {
        name,
        email,
        password
      });
      alert("Registeration successful, Now you can login");
    }
    catch(e){
      alert("Registeration failed try again later")
    }
    
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mt-20 mb-64'>
            <h1 className='text-4xl text-center mb-4'>Register</h1>
            <form className='max-w-md mx-auto border' onSubmit={registerUser}>
                <input  type="text" 
                        placeholder='john doe' 
                        value={name} 
                        onChange={ev=>{setName(ev.target.value)}} />
                <input type="email" 
                        placeholder='your@email.com' 
                        value={email} 
                        onChange={ev=>{setEmail(ev.target.value)}} />
                <input type="password" 
                        placeholder='password' 
                        value={password} 
                        onChange={ev=>{setPassword(ev.target.value)}}/>
                <button type='submit' className='primary'>Register</button>
                <div className='text-center py-2 text-gray-500'>
                    Already a member? <Link className='underline text-black' to='/login'>Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage
