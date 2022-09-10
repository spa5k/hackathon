export const getPokemons = async (currentPokemon: number): Promise<Response> => {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
}

export const getPokemonResourceList = async (): Promise<Response> => {
	return fetch(`https://pokeapi.co/api/v2/pokemon`)
}
