import React, {useEffect, useState} from "react"
import Sidebar from "../Sidebar"
//import gql from 'graphql-tag';
import { ApolloQueryResult, gql } from "@apollo/client"
import {client} from "../../index"
import { resourceLimits } from "worker_threads"


type Props = {}
type Category = {
  name: String
  description: String
}
const DashboardComponent = (props: Props) => {
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
      setAllCategories(result.data.categories.categories)
    };
    categories();
  },[])
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
        
        {allCategories && allCategories.map((category) =>
          <div className='flex justify-between px-8 py-8 border-b-2 border-gray-200'>
              <label htmlFor="">{ category.name }</label>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg></button>
            </div>
         )}    
        </div>
    </div>
  )
}

export default DashboardComponent