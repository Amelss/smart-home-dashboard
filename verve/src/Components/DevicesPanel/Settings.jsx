import React from 'react'

export default function MyDevices() {
  return (
    <div className="font-mulish mb-5 mt-5 pr-5">
      <div className="flex items-center justify-end">
        <img src="/assets/verve-images/settings.png" alt="settings" className='w-5' />
        <img src="/assets/verve-images/notifications.png" alt="settings" className='w-10 ml-4' />
        <img src="/assets/verve-images/scarlett.png" alt="profile" className='w-8 ml-4' />
        <select name="profiles" id="profiles" className='bg-transparent border-none'>
          <option value="scarllet">Scarlett</option>
          <option value="edit-profile">Edit Profile</option>
          <option value="account">Account Settings</option>
          <option value="logout">Log Out</option>
        </select>
      </div>
    </div>
  );
}
