import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between px-2 py-4 h-16'>
     <h1 className='py-1 lg:text-2xl'> To Do List</h1>  
     <div className='flex gap-4'>
        <a className='hover:bg-blue-600 hover:text-blue-100 cursor-pointer duration-1000 px-2 py-1 rounded'>Home</a>
        <a className='hover:bg-blue-600 hover:text-blue-100 cursor-pointer duration-1000 px-2 py-1 rounded'>About</a>
        <a className='hover:bg-blue-600 hover:text-blue-100 cursor-pointer duration-1000 px-2 py-1 rounded'>Contact</a>
     </div>
    </div>
  )
}

export default NavBar