import React from 'react'

export default function Mobile() {
  return (
      <div className='lg:hidden bg-navPurple'>
          <div className='grid h-screen place-items-center text-center text-white font-poppins'>
              <h1 className=''>Please view your Verve Dashboard on our dedicated Tablet or download our phone app!</h1> 
              <div>
                <button type='button' className='border-black border-2 text-center mx-auto flex justify-center rounded-md p-3'>Download App</button>
              </div>
          </div>
          
    </div>
  )
}
