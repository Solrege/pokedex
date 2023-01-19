import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { getPokemons, getPokemonData } from './Api'
import Pokemon from './Pokemon'
import Pagination  from './Pagination'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../contexts/FavoriteContexts'



const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const { fav } = useContext(FavoriteContext)  

  
  const fetchPokemon = async () => { 
    setLoading(true)
    const data = await getPokemons(30, 30 * page)
    await getDetailedPokemonInfo(data.results, data.count)
  }

  const getDetailedPokemonInfo = async (res, total) => {
    const promises = res.map(async (pokemon) => {
      return await getPokemonData(pokemon.url)
    })
    const results = await Promise.all(promises)
    setPokemons(results)
    setLoading(false)
    setTotal(Math.ceil(total / 30))
  }

  const buscarPokemon = async (name) => {
    await getDetailedPokemonInfo([{name: name, url: "https://pokeapi.co/api/v2/pokemon/"+name+"/"}], 1)
  }
  
  useEffect(() => {
    fetchPokemon()
  }, [page])



  return (
    <div>
      <SearchBar buscarPokemon={buscarPokemon} />
      <div className='heart'>
          <Link to='/favs'> Favoritos ❤ {fav.length} </Link>
      </div>
      <Pagination
      page={page}
      totalPages={total}
      setPage={setPage}
      />

      { loading 
      ? <div> <Spinner/> </div>
      : <div className='pokedex-grid'>
          { pokemons.map((poke) => {
              return (
                  <Pokemon pokemon={poke} key={poke.name}/>
              )}
          )}
        </div>
      }
    <Pagination
      page={page}
      totalPages={total}
      setPage={setPage}
    />
    </div>
  )
}

export default Pokedex