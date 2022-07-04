import React, { useState, useEffect } from 'react'
import { gql } from "@apollo/client"
import { client } from "../../index"
import Alert from "../messageComponent/Alert"
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { removeCreateFlashcard } from '../../redux/features/flashcards.feature'

type Props = {
  show: boolean;
}

/* type signup = {
  category: String,
  question: String,
  answer: String,
} */
function RegisterModal(props: Props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { show } = props;
  const [question, setQuestion] = useState<String>('');
  const [answer, setAnswer] = useState<String>('');
  const [message, setMessage] = useState<String>('');
  const [heading, setHeading] = useState<String>('');
  const [variant, setVariant] = useState<String>('');
  const [afterRegister, setAfterRegister] = useState<Boolean>(false)
  const [allCategories, setAllCategories] = useState<Array<any> | null>(null)
  useEffect(() => {
    const categories = async () => {
      
      const result = await client.query({
        query: gql`
  query {categories{
    categories{
      name
    }
  }}`
      });
      setAllCategories(result.data.categories.categories.map((cat: { name: any })=>cat.name))
    };
    categories();
  }, [])
  const [category, setCategory] = useState<string>('History');
  console.log("allCategories");
  console.log(allCategories);
  if (!show) {
    return null;
  }
  const handleSubmit = async () => {
    console.log("get there", category, question, answer);
  try{
    const result = await client.mutate({
      context: {
    headers: {
      "authorization": `Bearer ${sessionStorage.getItem('token')}`,
    }
  },
        mutation: gql`
  mutation{
    createFlashcard(question: "${question}", answer: "${answer}", category: "${category}"){
    id
    question
  }}`
    });
    console.log("result");
    console.log(result);
    if (result.data) {
      setMessage("Succesfully created flashcard")
      setHeading("Success")
      setVariant("success")
      setAfterRegister(true)
      setTimeout(() => { setAfterRegister(false); dispatch(removeCreateFlashcard()); navigate('.')}, 2000);
      }
    }
    
  catch (error) {
    console.log(error);
      setMessage("Failed to create flashcard")
      setHeading("Error")
      setVariant("error")
      setAfterRegister(true)
    }
  }
  
  return (
    <div className='bg-white mx-auto w-96 border-gray-100 shadow-lg  flex flex-col'>
      {afterRegister && <Alert message={`${message}`} variant={`${variant}`} heading={`${heading}`} />}
      <button onClick={()=>dispatch(removeCreateFlashcard())} type="button" className='absolute top-0 right-0 px-1 rounded-full bg-red-300 w-5 h-5 m-1 text-sm'>X</button>
      <h1 className='text-3xl font-poppins mx-auto mt-2 font-bold'>Create Flashcard</h1>
       <div className='mx-auto h-[450px] flex flex-col justify-between py-4'>
        <label htmlFor="category" className='text-xl'>Categories</label>
        <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                id="category"
                className="w-64 rounded-md my-2 p-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500"
              >
                { allCategories?.length ? (
                  allCategories?.map((category:string) => (
                    <option value={category}>{category}</option>
                  ))
                ) : (
                  <option>No Categories</option>
                )}
              </select>
      <label htmlFor="question" className='text-xl'>Question</label>
      <input onChange={(e)=>setQuestion(e.target.value)} placeholder='Question' type='text' className='border-b-2 border-gray-500 w-80 text-xl' />
      <label htmlFor="answer" className='text-xl'>Answer</label>
        <input onChange={(e)=>setAnswer(e.target.value)}  placeholder='Answer' type='text' className='border-b-2 border-gray-500 w-80 text-xl' />
        <button onClick={async () => { await handleSubmit()}} type='submit' className='w-48 p-2 mx-auto bg-orange-200 text-2xl my-4 rounded-md hover:bg-orange-500'>Add Flashcard</button>
       </div>
       <div className='flex flex-col my-4 space-y-4'>
       </div>
      </div>
  )
}

export default RegisterModal