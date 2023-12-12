import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold taxt-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Marn</span>
            <span className='text-slate-700'>Esatate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded flex items-center'>
          <input
            type='text'
            placeholder='search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline hover:underline text-slate-700'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline hover:underline text-slate-700'>
              About
            </li>

          </Link>
          <Link to='/sign-in'>
            <li className='hidden sm:inline hover:underline text-slate-700'>
              Sing in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
