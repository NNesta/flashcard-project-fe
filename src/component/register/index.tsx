import React from 'react'
import Navbar from "../Navbar";

type Props = {}

function Register({}: Props) {
  return (
    <div>
      <Navbar />
    <div className='mx-[550px] border-gray-100 shadow-lg  mt-8 flex flex-col'>
      <h1 className='text-3xl font-poppins mx-auto mt-8'>Register</h1>
       <form className='mx-auto h-[550px] flex flex-col justify-between mt-8 py-4'>
           <label htmlFor="firstname" className='text-xl'>FirstName</label>
      <input placeholder='firstname' type='text' className='border-b-2 border-gray-500 w-96  text-xl' />
         <label htmlFor="lastname" className='text-xl'>LastName</label>
           <input placeholder='lastname' type='text' className='border-b-2 border-gray-500 w-96  text-xl' />
         
      
      <label htmlFor="email" className='text-xl'> E-mail</label>
      <input placeholder='E-mail' type='email' className='border-b-2 border-gray-500 w-96 text-xl' />
      <label htmlFor="password" className='text-xl'> Password</label>
        <input  placeholder='Password' type='password' className='border-b-2 border-gray-500 w-96 text-xl' />
        <button type='submit' className='w-48 p-2 mx-auto bg-orange-200 text-2xl my-4 rounded-md hover:bg-orange-500'>Register</button>
       </form>
       <div className='flex flex-col my-4 space-y-4'>
       <button>Google</button>
       <button>Facebook</button>
       </div>
      </div>
    </div>
  )
}

export default Register