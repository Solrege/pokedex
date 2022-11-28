import React from 'react'
import { useState, useEffect } from 'react'
import { getPokemon, getPokemonData } from './Api'
import Pokemon from './Pokemon'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    
    const fetchPokemon = async () => { 
        const data = await getPokemon()
        const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results)
      }



    /*const fetchPokemon = () => {
        getPokemon().then((data) => {
            setPokemons(data.results)    
        })
    }*/
    //console.log(pokemons)
    
    
    
      useEffect(() => {
        fetchPokemon()
      }, [])

  return (
    <div>
        { pokemons.map((poke) => {
            return (
                <Pokemon pokemons={poke} key={poke.name}/>
            )}
        )}
        
    </div>
  )
}

export default Pokedex