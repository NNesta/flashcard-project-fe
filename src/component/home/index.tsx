import React from 'react'
import Navbar from "../Navbar"
import background from "../../assets/background.jpg"
import LoginModal from "../login"
import RegisterModal from "../register"
import { useDispatch, useSelector } from 'react-redux';
import { setLoggin } from '../../redux/features/loggin.feature'
import { useNavigate } from 'react-router-dom'
import { removeRegister } from '../../redux/features/register.feature'



function HomeComponent() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const loggin = useSelector((state: any)=>state.loggin.loggin)
  const register = useSelector((state: any)=>state.register.register)
  
  return (
    <div className='mx-4 relative'>
      <div className=''>
      <Navbar />
      </div>
  <div className=''>
        <img src={background} alt="" />
        <div className='absolute left-[7%] top-[30%]'>
          <h1 className='text-7xl leading-1 tracking-wider text-white '>GROW YOUR </h1>
          <h1 className='text-7xl text-white uppercase'>Brain ability</h1>
          <button onClick={()=>sessionStorage.getItem("token")? navigate("/dashboard") : dispatch(setLoggin()) && dispatch(removeRegister())} className='text-white bg-blue-500 rounded-lg my-48 p-8 text-2xl hover:bg-blue-600 hover:scale-105 ease-in-out'>Find your flashcard</button>
        </div>
       
        <div className='absolute left-[40%] top-[17%]'>
       <LoginModal show={loggin} />
       <RegisterModal show={register} /></div>
      </div>
    </div>
  )
}

export default HomeComponent