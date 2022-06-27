import React from 'react'
import Navbar from "../Navbar"

type Props = {}

function HomeComponent({}: Props) {
  return (
    <div className='mx-4'>
      <Navbar />
    </div>
  )
}

export default HomeComponent