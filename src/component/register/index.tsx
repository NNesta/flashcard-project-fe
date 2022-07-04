import React, { useState } from 'react'
import { gql } from "@apollo/client"
import { client } from "../../index"
import Alert from "../messageComponent/Alert"
import { useDispatch } from 'react-redux';
import { setLoggin } from "../../redux/features/loggin.feature";
import { removeRegister } from "../../redux/features/register.feature";

type Props = {
  show: boolean
}

/* type signup = {
  name: String,
  email: String,
  password: String,
} */
function RegisterModal(props: Props) {
  const dispatch = useDispatch();
  const { show } = props;
  const [name, setName] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [message, setMessage] = useState<String>('');
  const [heading, setHeading] = useState<String>('');
  const [variant, setVariant] = useState<String>('');
  const [afterRegister, setAfterRegister] = useState<Boolean>(false)
  if (!show) {
    return null;
  }
  const handleSubmit = async () => {
  try{
    const result = await client.mutate({
        mutation: gql`
  mutation{
    signup(name: "${name}", email: "${email}", password: "${password}"){
    name
  }}`
    });
    console.log(result.data.signup);
    if (result.data.signup) {
      setMessage("Succesfully register")
      setHeading("Success")
      setVariant("success")
      setAfterRegister(true)
      setTimeout(() => { dispatch(removeRegister()); dispatch(setLoggin()) }, 2000);
      }
    }
    
    catch (error) {
      setMessage("Failed to register")
      setHeading("Error")
      setVariant("error")
      setAfterRegister(true)
    }
  }
  
  return (
    <div className='bg-white mx-auto w-96 border-gray-100 shadow-lg  flex flex-col'>
      <button onClick={()=>dispatch(removeRegister())} type="button" className='absolute top-0 right-0 px-1 rounded-full bg-red-300 w-5 h-5 m-1 text-sm'>X</button>
      {afterRegister && <Alert message={`${message}`} variant={`${variant}`} heading={`${heading}`} />}
      <h1 className='text-3xl font-poppins mx-auto mt-2 font-bold'>Register</h1>
       <div className='mx-auto h-[450px] flex flex-col justify-between py-4'>
      <label htmlFor="names" className='text-xl'>Names</label>
      <input onChange={(e)=>setName(e.target.value)} placeholder='names' type='text' className='border-b-2 border-gray-500 w-80  text-xl focus:border-none' />
      <label htmlFor="email" className='text-xl'> E-mail</label>
      <input onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail' type='email' className='border-b-2 border-gray-500 w-80 text-xl' />
      <label htmlFor="password" className='text-xl'> Password</label>
        <input onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' type='password' className='border-b-2 border-gray-500 w-80 text-xl' />
        <button onClick={async()=>{console.log("hhh");await handleSubmit()}} type='submit' className='w-48 p-2 mx-auto bg-orange-200 text-2xl my-4 rounded-md hover:bg-orange-500'>Register</button>
       </div>
       <div className='flex flex-col my-4 space-y-4'>
       </div>
      </div>
  )
}

export default RegisterModal