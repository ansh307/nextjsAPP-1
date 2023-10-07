'use client'

import { useRouter } from "next/navigation"
import React, { FormEvent, useState } from "react"


function Search() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch("")
    router.push(`/search/${search}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={search}
        placeholder="Enter The Search Term"
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-64 text-black"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}

export default Search
