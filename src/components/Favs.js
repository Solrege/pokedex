import { useContext } from 'react'
import { FavoriteContext } from '../contexts/FavoriteContexts'
import { FaTrash } from "react-icons/fa"
import {Link} from "react-router-dom";

const Favs = () => {
    const { fav, removeFav } = useContext(FavoriteContext)

    
    return (
        <div>
            <h3>Favoritos</h3>
            <hr/>
            <div className='pokedex-grid'>
                {fav.map( (p) =>
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
                        <div className='info'>
                            <Link to={`/${p.id}`} className='btn btn-outline-secondary'>Ver más</Link>
                        </div>
                    </div> 
                    <button onClick={ () => removeFav(p)} className="btn heart"><FaTrash/></button>

                </div>
                )}
            </div>
            
        </div>
    )
}

export default Favs
