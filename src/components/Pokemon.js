import React from 'react'

const Pokemon = (poke) => {
    console.log(poke)
   
  return (
    <div>
        <h2>#{poke.pokemons.id} {poke.pokemons.name}</h2>
        <img src={poke.pokemons.sprites.front_default}/>
        
    </div>
    
  )
}

export default Pokemon