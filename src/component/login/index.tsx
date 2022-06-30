import React, { useState} from 'react';
import { gql } from "@apollo/client"

import { useDispatch } from "react-redux"
import { removeLoggin, setLoggin, setIsLoggedIn } from "../../redux/features/loggin.feature"
import {setRegister} from "../../redux/features/register.feature"
import { client } from "../../index"
import Alert from "../messageComponent/Alert"
import {useNavigate} from "react-router-dom"

type Props = {
  show: boolean
}

function LoginModal(props: Props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { show } = props;
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [message, setMessage] = useState<String>('');
  const [heading, setHeading] = useState<String>('');
  const [variant, setVariant] = useState<String>('');
  const [afterLogin, setAfterLogin] = useState<Boolean>(false)
  const handleSubmit = async () => {
    try{
      const result = await client.mutate({
        mutation: gql`
  mutation{
    login(email: "${email}", password: "${password}"){
    token
    user{
      name
    }
  }}`
    });
      if (result.data) {
      dispatch(setLoggin())
      setMessage("Succesfully login")
      setHeading("Success")
      setVariant("success")
      setAfterLogin(true)
        setTimeout(() => { dispatch(removeLoggin()); dispatch(setIsLoggedIn()); navigate("/dashboard") } , 2000)
      }
      sessionStorage.setItem("token", result.data.login.token)
      sessionStorage.setItem("user", result.data.login.user.name)
    }
    
    catch (error) {
      setMessage("Failed login")
      setHeading("Error")
      setVariant("error")
      setAfterLogin(true)
      setTimeout(() =>{dispatch(removeLoggin()); navigate("/")} , 2000)
    }
  }
  if (!show) {
    return null;
  } 
  
  return (
    <div className='bg-white mx-auto w-96 border-gray-100 shadow-lg  flex flex-col'>
      {afterLogin && <Alert message={`${message}`} variant={`${variant}`} heading={`${heading}`} />}
      <button onClick={()=>dispatch(removeLoggin())} type="button" className='absolute top-0 right-0 px-1 rounded-full bg-red-300 w-5 h-5 m-1 text-sm'>X</button>
      <h1 className='text-3xl font-poppins mx-auto mt-4'>Log In</h1>
       <div className='m-auto flex flex-col space-y-5 my-4'>
      <label htmlFor="email" className='text-xl'> E-mail</label>
      <input onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail' type='email' className='border-b-2 border-gray-500 w-80 text-xl' />
      <label htmlFor="password" className='text-xl'> Password</label>
        <input onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' type='password' className='border-b-2 border-gray-500 w-80 text-xl' />
        <button onClick={async ()=>await handleSubmit()} className='w-32 p-2 mx-auto bg-orange-200 text-2xl my-4 rounded-md hover:bg-orange-500'>Log In</button>
        <div className="flex gap-8 mx-auto">
        <button onClick={()=>{dispatch(removeLoggin()); dispatch(setRegister())}} className="text-blue-300">Create account</button>
        <button className="text-gray-700">Forget password?</button>
        </div>
      </div>
      </div>
  )
}

export default LoginModal;