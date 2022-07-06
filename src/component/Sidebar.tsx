import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { removeCreateFlashcard, setCreateFlashcard } from "../redux/features/flashcards.feature"
import {removeCreateCategory, setCreateCategory} from "../redux/features/categories.feature"
import { useNavigate } from 'react-router-dom';

type Props = {}

const Sidebar = (props: Props) => {
  const navigate = useNavigate()
  const [flashcardToolTip, setFlashcardToolTip] = useState(false)
  const [categoryToolTip, setCategoryToolTip] = useState(false)
  const dispatch = useDispatch();
  return (
      <div className='flex flex-col justify-between h-screen p-8 bg-gray-500 text-white'>
          <div>
              <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>  
        <div>
          <button onClick={() => sessionStorage.clear()}>Logout</button>
        </div>
        <div>
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
        <div>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
          </div>
      <div className='flex flex-col gap-y-12'>
         <div className='relative'>
          {categoryToolTip && <h1 className='absolute left-0 top-0 bg-green-400 w-28 rounded-md p-2 text-white text-xs z-50'>Create Category</h1>}
        <button onMouseEnter={()=>setCategoryToolTip(true)} onMouseLeave={()=>setTimeout(()=>setCategoryToolTip(false), 100)} onClick={() => { dispatch(removeCreateFlashcard());  dispatch(setCreateCategory())}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
          </button>
          </div>
        <div className='relative'>
          {flashcardToolTip && <h1 className='absolute left-0 top-0 w-28 bg-green-400 rounded-md p-2 text-white text-xs z-50'>Create Flashcard</h1>}
        <button onMouseEnter={()=>setFlashcardToolTip(true)} onMouseLeave={()=>setTimeout(()=>setFlashcardToolTip(false),100)} onClick={() => { dispatch(removeCreateCategory());  dispatch(setCreateFlashcard())}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button></div>
      </div>
          
          
    </div>
  )
}

export default Sidebar