import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import './Pokemon.css'

const Pokemon = () => {
  const { pokemonId } = useParams()
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchP = async () => {
    setLoading(true)
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    let response = await fetch(url)
    let data = await response.json()
    setLoading(false)
    return setPokemon(data)

  }

  useEffect(() => {
    fetchP(pokemon)

  }, [])


  return (
    <div id="cards">
      { loading 
        ? <div> <Spinner/> </div>
        : <figure className="card card--normal">
          <div className="card__image-container">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card__image" />
          </div>

          <figcaption className="card__caption">
            <h1 className="card__name"> #{pokemon.id} {pokemon.name}</h1>
            <h4 className="card__type" > {pokemon.types[0].type.name} </h4>

            <table className="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td> {pokemon.stats[0].base_stat} </td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td> {pokemon.stats[1].base_stat} </td>
                </tr>
                <tr>
                  <th>Defense</th>
                  <td> {pokemon.stats[2].base_stat} </td>
                </tr>
                <tr>
                  <th>Special Attack</th>
                  <td> {pokemon.stats[3].base_stat} </td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td> {pokemon.stats[4].base_stat} </td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td> {pokemon.stats[5].base_stat} </td>
                </tr>
              </tbody>
            </table>

            <div className="card__abilities">
              <h5 className="card__ability">
                <span className="card__label"> Ability </span>
                {pokemon.abilities[0].ability.name}
              </h5>
              <h5 className="card__ability">
                <span className="card__label">Hidden Ability</span>
                {pokemon.abilities[1].ability.name}
              </h5>
            </div>
          </figcaption>
        </figure>
      } 
    </div>
  )
}

export default Pokemon