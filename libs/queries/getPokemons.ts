// const localUrl = 'http://localhost:8080/pokemon'
const prodUrl = 'https://pokeapi.co/api/v2/pokemon'

// process.env.ENV = 'DEVELOPMENT
export const getPokemons = async (currentPokemon: number): Promise<Response> => {
	return fetch(`${prodUrl}/${currentPokemon}`)
}

export const getPokemonResourceList = async (): Promise<Response> => {
	return fetch(prodUrl)
}
