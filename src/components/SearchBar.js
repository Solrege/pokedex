import React from 'react'
import { useState } from 'react'


const SearchBar = (props) => {

  const [search, setSearch] = useState('')
  
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onClick = (e) => { 
    e.preventDefault()
    props.buscarPokemon(search)
    }
  

  return (
    <div>
      <div className='searchbar-container'>
          <div>
              <input className='searchbar' placeholder='Ingrese nombre o número de Pokemon' onChange={onChange}></input>
          </div>
          <div>
              <button className='btn btn-secondary' onClick={onClick}>Buscar</button>
          </div>
      </div>
    </div>
  )
}

export default SearchBar