import React from 'react'

export default function SearchBar() {
  return (
      <div className='font-mulish mb-5 mt-5'>
          <div className='flex items-center bg-search rounded-xl '>
              <img src="./assets/verve-images/search.png" alt="search" className='pl-4' />
              <input type="search" placeholder='Search' className='bg-search placeholder-gray-400 font-light ml-4 text-xs p-3 w-96 rounded-xl border-none'/>
          </div>
        
       
      </div>
  )
}
