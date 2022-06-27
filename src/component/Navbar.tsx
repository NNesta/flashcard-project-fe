import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between border-b-2 items-center px-2 h-20'>
<div className='text-2xl'>FLASHCARD</div>
      <div className='flex space-x-8'>
        <button className='text-lg'>Find flashcards</button>
        <button  className='text-lg'>Create flashcards</button>
</div>
      <div className='flex gap-4 items-center'>
        <a className='text-lg' href="/login">Log in</a>
        <a href='/register' className='bg-orange-500 text-xl text-center text-white p-6 h-20'>Get started</a>
</div>
    </div>
  )
}

export default Navbar