import { createContext, useState } from "react";
import Swal from "sweetalert2";

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

    const removeFav = (pokemon) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Se borrará el pokemon elegido",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                setFav( fav.filter((p) => pokemon.name !== p.name) 
                )}
          })
    }
    
    return (
        <FavoriteContext.Provider 
            value= { {fav, addToFav, removeFav } }> 
            
            {children}
        </FavoriteContext.Provider>
    )}