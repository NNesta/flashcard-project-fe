import React, { useState } from 'react'
import { gql } from "@apollo/client"
import { client } from "../../index"
import Alert from "../messageComponent/Alert"
import { useNavigate } from "react-router-dom";
import { removeCreateCategory } from '../../redux/features/categories.feature';
import { useDispatch } from 'react-redux';

type Props = {
  show: boolean
}

/* type signup = {
  name: String,
  description: String,
} */
function CategoryModal(props: Props) {
  const dispatch = useDispatch();
  const { show } = props;
  const [name, setName] = useState<String>('');
  const [description, setDescription] = useState<String>('');
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
      context: {
    headers: {
      "authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  },
        mutation: gql`
  mutation{
    createCategory(name: "${name}", description: "${description}"){
    name
  }}`
    });
    if (result.data) {
      setMessage("Succesfully created category")
      setHeading("Success")
      setVariant("success")
      setAfterRegister(true)
      setTimeout(() => { setAfterRegister(false); dispatch(removeCreateCategory())}, 2000);
      }
    }
    
  catch (error) {
      setMessage("Failed to create category")
      setHeading("Error")
      setVariant("error")
      setAfterRegister(true)
    }
  }
  
  return (
    <div className='bg-white mx-auto w-96 border-gray-100 shadow-lg  flex flex-col'>
      {afterRegister && <Alert message={`${message}`} variant={`${variant}`} heading={`${heading}`} />}
      <button onClick={()=>dispatch(removeCreateCategory())} type="button" className='absolute top-0 right-0 px-1 rounded-full bg-red-300 w-5 h-5 m-1 text-sm'>X</button>
      <h1 className='text-3xl font-poppins mx-auto mt-2 font-bold'>Create Category</h1>
       <div className='mx-auto h-[450px] flex flex-col justify-between py-4'>
      <label htmlFor="names" className='text-xl'>Names</label>
      <input onChange={(e)=>setName(e.target.value)} placeholder='Names' type='text' className='border-b-2 border-gray-500 w-80  text-xl focus:border-none' />
      <label htmlFor="description" className='text-xl'> Description</label>
      <textarea cols={4} rows={2} onChange={(e)=>setDescription(e.target.value)} placeholder='Description'className='border-b-2 border-gray-500 w-80 text-xl' />
        <button onClick={async () => { await handleSubmit();  window.location.reload()}} type='submit' className='w-48 p-2 mx-auto bg-orange-200 text-2xl my-4 rounded-md hover:bg-orange-500'>Add category</button>
       </div>
    
      </div>
  )
}

export default CategoryModal