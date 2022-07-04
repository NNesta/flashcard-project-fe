/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {setLoggin, removeLoggin, setIsLoggedOut} from "../redux/features/loggin.feature";
import { setRegister, removeRegister } from "../redux/features/register.feature";

type Props = {}

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='sticky flex justify-between border-b-2 items-center h-20'>
<div className='hidden md:block text-2xl'>FLASHCARD</div>
      <div className='hidden md:flex space-x-8'>
        <button onClick={()=>sessionStorage.getItem("token")? navigate("/dashboard") : dispatch(setLoggin())} className='text-lg'>Find flashcards</button>
        <button onClick={()=>sessionStorage.getItem("token")? navigate("/dashboard") : dispatch(setLoggin())} className='text-lg'>Create flashcards</button>
</div>
      <div className='hidden md:flex items-center'>
        {!sessionStorage.getItem("user") ?
          <><button onClick={() => { dispatch(removeRegister()); dispatch(setLoggin()); }} className='text-xl hover:bg-gray-200 p-6'>Log in</button>
            <button onClick={() => { dispatch(removeLoggin()); dispatch(setRegister()); }} className='bg-orange-500 text-xl text-center text-white p-6 h-20'>Get started</button></> : 
          <><h1 className='mx-8'>Hello {sessionStorage.getItem('user')} </h1>
            <button onClick={() => { dispatch(setIsLoggedOut()); sessionStorage.clear(); navigate("/"); }} className='bg-orange-500 text-xl text-center text-white p-6 h-20'>Logout</button>
          </>
        }
      </div>
      <div className='lg:hidden flex flex-col items-center p-4 mr-auto z-50 bg-white'>
         <button onClick={()=>sessionStorage.getItem("token")? navigate("/dashboard") : dispatch(setLoggin())} className='text-lg'>Find flashcards</button>
        <button onClick={()=>sessionStorage.getItem("token")? navigate("/dashboard") : dispatch(setLoggin())} className='text-lg'>Create flashcards</button>
      {!sessionStorage.getItem("user") ?
          <><button onClick={() => { dispatch(removeRegister()); dispatch(setLoggin()); }} className='text-xl hover:bg-gray-200 p-6'>Log in</button>
            <button onClick={() => { dispatch(removeLoggin()); dispatch(setRegister()); }} className='bg-orange-500 text-xl text-center text-white p-6 h-20'>Get started</button></> : 
          <><h1 className='mx-8'>Hello {sessionStorage.getItem('user')} </h1>
            <button onClick={() => { dispatch(setIsLoggedOut()); sessionStorage.clear(); navigate("/"); }} className='bg-orange-500 text-xl text-center text-white p-6 h-20'>Logout</button>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar