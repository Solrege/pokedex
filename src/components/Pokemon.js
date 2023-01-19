import { useContext } from 'react'
import { FavoriteContext } from '../contexts/FavoriteContexts'

const Pokemon = (props) => {
  const { fav, addToFav } = useContext(FavoriteContext)
  const p = props.pokemon

  const clickHeart = (e) => {
    e.preventDefault()
    addToFav(p)
  }

  const redHeart = "❤️";
  const blackHeart = "🖤";
  //const heart = fav.includes(p.name) ? redHeart : blackHeart
  const heart = fav.some(e => {
    return p.name == e.name
  }) ? redHeart : blackHeart

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

      <div className='heart' onClick={clickHeart}>
        {heart}
      </div>
        
    </div>
    
  )
}

export default Pokemon