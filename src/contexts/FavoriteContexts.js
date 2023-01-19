import { createContext, useState } from "react";

export const FavoriteContext = createContext()

export const FavoriteProvider = ({children}) => {
    const [fav, setFav] = useState([])

    const addToFav = (pokemon) => {
        const f = fav.some(p => {
            return p.name == pokemon.name})
        if (f){
            let nuevoFav = fav.filter(p => {
                return p.name !== pokemon.name
            })
            setFav(nuevoFav)
            return
        }
        setFav([...fav, pokemon])
    }
    
    return (
        <FavoriteContext.Provider 
            value= { {fav, addToFav } }> 
            
            {children}
        </FavoriteContext.Provider>
    )}