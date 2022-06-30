import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { removeCreateFlashcard, setCreateFlashcard } from "../redux/features/flashcards.feature"
import {removeCreateCategory, setCreateCategory} from "../redux/features/categories.feature"

type Props = {}

const Sidebar = (props: Props) => {
  const [flashcardToolTip, setFlashcardToolTip] = useState(false)
  const [categoryToolTip, setCategoryToolTip] = useState(false)
  const dispatch = useDispatch();
  return (
      <div className='flex flex-col justify-between h-screen p-8 bg-gray-500 text-white'>
          <div>
              <div>Logo</div>  
              <div>Profile</div> 
              <button onClick={()=>console.log("logged out")}>Logout</button>
          </div>
      <div className='flex flex-col gap-y-12'>
         <div className='relative'>
          {categoryToolTip && <h1 className='left-[50%] bg-green-400 rounded-md p-2 text-white top-[0%] text-sm z-50'>Create Category</h1>}
        <button onMouseEnter={()=>setCategoryToolTip(true)} onMouseLeave={()=>setCategoryToolTip(false)} onClick={() => { dispatch(removeCreateFlashcard());  dispatch(setCreateCategory())}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
          </button>
          </div>
        <div className='relative'>
          {flashcardToolTip && <h1 className='left-[50%] bg-green-400 rounded-md p-2 text-white top-[0%] text-sm z-50'>Create Flashcard</h1>}
        <button onMouseEnter={()=>setFlashcardToolTip(true)} onMouseLeave={()=>setFlashcardToolTip(false)} onClick={() => { dispatch(removeCreateCategory());  dispatch(setCreateFlashcard())}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button></div>
      </div>
          
          
    </div>
  )
}

export default Sidebar