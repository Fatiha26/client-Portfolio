import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center py-2 text-lg'>
        <Link className='px-4 py-2' href="/">About</Link>
        <Link className='px-4 py-2' href="/">Blogs</Link>
        <Link className='px-4 py-2' href="/">Skills</Link>
        <Link className='px-4 py-2' href="/">Projects</Link>
        <Link className='px-4 py-2' href="/">Contact</Link>
    </nav>
  )
}

export default Navbar