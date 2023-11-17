import React from 'react'

const SearchInput = ({searchWord,setSearchWord}) => {
  return (
    <form className="mb-2">
    <input value={searchWord} type="text" onChange={(e) => setSearchWord(e.target.value)} placeholder='search' className="x-input" />
  </form>
  )
}

export default SearchInput