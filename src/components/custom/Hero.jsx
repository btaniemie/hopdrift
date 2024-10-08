import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center w-screen gap-9'>
      <h1 className='font-extrabold text-[40px] mt-16'>Discover your perfect getaway with <span className= 'text-sky-700'>hopdrift</span>!</h1>
      <p className='text-xl text-gray-500 text-center'>Our AI-powered app makes planning trips and vacations easy, fun, and tailored just for you.</p>
      <Link to={'/create-trip'}>
        <Button>Get Started. It's Free!</Button>
      </Link>

      <img src='/landing.png' className='w-4/5 shadow-xl mt-19 mb-6 rounded-2xl'/>
      <h2 className='text-center text-gray-500 mb-10'>🛠️ Built by Minh Le</h2>
    </div>
  )
}

export default Hero