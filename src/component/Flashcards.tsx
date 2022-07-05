import React, {useEffect, useState} from "react"
import { useParams } from 'react-router-dom';
import { gql } from "@apollo/client"
import {client} from "../index"
import { useSelector } from "react-redux"
import FlashcardModal from "./flashcard"
import CategoryModal from "./category"
import Sidebar from "./Sidebar"
import Card from "./card"

type Props = {}
/* type Flashcard = {
  name: String
  description: String
} */
const FlashcardsComponent = (props: Props) => {
  const { id } = useParams()
  const category = useSelector((state: any)=>state.category.createCategory)
  const flashcard = useSelector((state: any)=>state.flashcard.createFlashcard)
  const [allFlashcards, setAllFlashcards] = useState<Array<any> | null>(null)
  
  useEffect(() => {
    const categories = async () => {
      
      const result = await client.query({
        query: gql`
  query {flashcards(category: ${id}){
    flashcards{
        question
        answer
  }}}`
      });
      setAllFlashcards(result.data.flashcards.flashcards)
    };
    categories();
  }, [])
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-screen'>
        <div className='w-auto flex items-center px-8 justify-between border-b-2 border-gray-100'>
          <div> Knowledge Rehab</div>
          <div className='w-32 h-32 text-center py-8 rounded-full border-8 border-gray-300'> 
            <p>0.0%</p>
            <p>Mastery</p>
          </div>
        </div>
        <div className="flex flex-wrap">
        {allFlashcards && allFlashcards.map((flashcard) =>
          <Card question={flashcard.question} answer={ flashcard.answer }/>
         )}  </div>  
      </div>
      <div className='absolute left-[40%] top-[17%]'>
        <CategoryModal show={category} />
        <FlashcardModal show={flashcard}/>
      </div>
    </div>
  )
}

export default FlashcardsComponent