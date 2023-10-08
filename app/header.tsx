import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="bg-black">
      <div className="p-5 flex items-center justify-between">
        <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} className="dark:invert mr-6" />
        <div>
          <Link href="/" className="px-4 py-2 mx-2 bg-white text-black rounded-full hover:bg-blue-300 hover:text-white transition duration-300">
            Home
          </Link>
          <Link href="/todos" className="px-4 py-2 mx-2 bg-white text-black rounded-full hover:bg-blue-300 hover:text-white transition duration-300">
            Todos
          </Link>
          <Link href="/search" className="px-4 py-2 mx-2 bg-white text-black rounded-full hover:bg-blue-300 hover:text-white transition duration-300">
          Search
          </Link>
        </div>
      </div>
      <div className="h-0.5 bg-white shadow-md text-white"></div>
    </header>

  )
}

export default Header
