import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50'>
      <div className='container mx-auto px-4 h-full flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>Aladdin</h1>
        </div>

        <nav className='flex items-center space-x-4'>
          <Link href='/' className='hover:text-blue-600'>
            首页
          </Link>
          <Link href='/dashboard' className='hover:text-blue-600'>
            控制台
          </Link>
          <Link href='/about' className='hover:text-blue-600'>
            关于
          </Link>
        </nav>
      </div>
    </header>
  )
}
