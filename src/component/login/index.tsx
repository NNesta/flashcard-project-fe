import React, { useState, useRef } from 'react';
import Navbar from "../Navbar";

type Props = {}

function LoginComponent({ }: Props) {
  return (
    <div>
      <Navbar />
    <div className='mx-[550px] border-gray-100 shadow-lg  mt-8 flex flex-col'>
      <h1 className='text-3xl font-poppins mx-auto mt-8'>Log In</h1>
       <form className='m-auto flex flex-col space-y-4 my-8 py-4'>
      <label htmlFor="email" className='text-xl'> E-mail</label>
      <input placeholder='E-mail' type='email' className='border-b-2 border-gray-500 w-96 text-xl' />
      <label htmlFor="password" className='text-xl'> Password</label>
        <input  placeholder='Password' type='password' className='border-b-2 border-gray-500 w-96 text-xl' />
        <button className='w-32 p-2 mx-auto bg-orange-200 text-2xl my-4 rounded-md hover:bg-orange-500'>Log In</button>
        <div className="flex gap-8 mx-auto">
        <a href="/register" className="text-blue-300">Create account</a>
        <a href="/register" className="text-gray-700">Forget password?</a>
      </div>
      </form>
      </div>
    </div>
  )
}

export default LoginComponent;