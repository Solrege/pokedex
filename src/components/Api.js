
export const searchPokemon = async (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    let response = await fetch (url)
    let data = await response.json()

    return data
}


export const getPokemon = async (limit = 5, offset = 0) => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    let response = await fetch (url)
    let data = await response.json()

    return data
}

export const getPokemonData = async (url) => {
    let response = await fetch (url)
    let data = await response.json()

    return data
}