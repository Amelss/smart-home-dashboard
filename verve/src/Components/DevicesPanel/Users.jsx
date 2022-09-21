import React from 'react'

export default function Users() {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <h1>Members</h1>
        <img
          src="/assets/verve-images/arrow.png"
          alt="arrow"
          className="ml-5 bg-search  rounded-lg pb-2 pt-2 pl-[10px] pr-[10px] "
        />
      </div>

      <div className="pt-2 mt-4 bg-white rounded-3xl border border-barelyGray">
        <div className="flex justify-center items-center pt-2 pb-3 ">
           <div >
          <img src="/assets/verve-images/scarlett.png" alt="user" className='users-img' />
          <p className='user-name-text'>Scarlett</p>
          <p className='admin-text'>Admin</p>
        </div>

        <div className='pl-4'>
          <img src="/assets/verve-images/nariya.png" alt="user" className='users-img' />
          <p className='user-name-text'>Nariya</p>
          <p className='admin-text'>Full Access</p>
        </div>

        <div className='pl-4'>
          <img src="/assets/verve-images/riya.png" alt="user" className='users-img' />
          <p className='user-name-text'>Riya</p>
          <p className='admin-text'>Full Access</p>
        </div>

        <div className='pl-4'>
          <img src="/assets/verve-images/dad.png" alt="user" className='users-img' />
          <p className='user-name-text'>Dad</p>
          <p className='admin-text'>Full Access</p>
        </div>


        <div className='pl-4'>
          <img src="/assets/verve-images/mum.png" alt="user" className='users-img' />
          <p className='user-name-text'>Mum</p>
          <p className='admin-text'>Full Access</p>
        </div>

        </div>
       
      </div>
    </div>
  );
}
