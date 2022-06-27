import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
      <div className='flex flex-col justify-between h-screen p-8 bg-gray-500 text-white'>
          <div>
              <div>Logo</div>  
              <div>Profile</div> 
              <button onClick={()=>console.log("logged out")}>Logout</button>
          </div>
          <div className='flex flex-col gap-y-12'>
              <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg></div>
              <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg></div>
          </div>
          
    </div>
  )
}

export default Sidebar