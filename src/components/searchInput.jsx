import React from 'react'

const SearchInput = ({searchWord,setSearchWord}) => {
  return (
    <form className="mb-2">
    <input value={searchWord} type="text" onChange={(e) => setSearchWord(e.target.value)} className="border w-full" />
  </form>
  )
}

export default SearchInput