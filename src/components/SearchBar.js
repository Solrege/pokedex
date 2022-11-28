import React from 'react'
import { useState } from 'react'
import { searchPokemon } from './Api'

const SearchBar = () => {

  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState()
  
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onClick = () => { 
    searchPokemon(search).then((data) => {
      setPokemon(data)
    })
  }

  return (
    <div className='searchbar-container'>
        <div>
            <input className='searchbar' placeholder='Buscar pokemon...' onChange={onChange}></input>
        </div>
        <div>
            <button className='btn btn-secondary' onClick={onClick}>Buscar</button>
        </div>
    </div>
  )
}

export default SearchBar