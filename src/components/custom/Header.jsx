import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='w-screen p-3 shadow-sm flex justify-between items-center px-5'>
      <div className='flex'>
        <img src='/logo.svg' className='w-10'/>
        <div className='font-bold text-sky-700 content-center text-2xl ml-1'>hopdrift</div>
      </div>

      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header