import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { gql } from "@apollo/client"
import {client} from "../../index"
import { useSelector } from "react-redux"
import FlashcardModal from "../flashcard"
import CategoryModal from "../category"
import Sidebar from "../Sidebar"

type Props = {}
/* type Category = {
  name: String
  description: String
} */
const DashboardComponent = (props: Props) => {
  const navigate = useNavigate();
  const category = useSelector((state: any)=>state.category.createCategory)
  const flashcard = useSelector((state: any)=>state.flashcard.createFlashcard)
  const [allCategories, setAllCategories] = useState<Array<any> | null>(null)
  useEffect(() => {
    const categories = async () => {
      
      const result = await client.query({
        query: gql`
  query {categories{
    categories{
      id
      name
    }
  }}`
      });
      setAllCategories(result.data.categories.categories)
    };
    categories();
  }, [])
  const listCategories = allCategories?.map(category => category.name);
  console.log(listCategories);
  return (
    <div className='flex'>
      <div className="fixed"><Sidebar /></div>
      
      <div className='ml-24 w-screen'>
        <div className='w-auto flex items-center px-8 justify-between border-b-2 border-gray-100'>
          <div> Knowledge Rehab</div>
          <div className='w-32 h-32 text-center py-8 rounded-full border-8 border-gray-300'> 
            <p>0.0%</p>
            <p>Mastery</p>
          </div>
        </div>
        
        {allCategories && allCategories.map((category) =>
          <div className='flex justify-between px-8 py-8 border-b-2 border-gray-200'>
            <label htmlFor="">{category.name}</label>
            <button onClick={()=>{navigate(`/dashboard/flashcards/${category.id}`)}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg></button>
            </div>
         )}    
      </div>
      <div className='absolute left-[40%] top-[17%]'>
        <CategoryModal show={category} />
        <FlashcardModal show={flashcard} categories={listCategories} />
      </div>
    </div>
  )
}

export default DashboardComponent