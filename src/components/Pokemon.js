import React from 'react'

const Pokemon = (poke) => {
   console.log(poke)
   const p = poke.pokemons

  return (
    <div className='pokemon-card'>
      <div className='pokemon-img-container'>
        <img src={p.sprites.front_default} alt={p.name}/>
      </div>

      <div className='card-body'>
        <div className='card-top'>
          <h3>#{p.id} {p.name}</h3>
        </div>

        <div className='card-bottom'>
          <div className='pokemon-type'>
            {p.types.map((t) => {
              return (
                <div className='types'> {t.type.name} </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='heart'>
        🖤
      </div>
        
    </div>
    
  )
}

export default Pokemon