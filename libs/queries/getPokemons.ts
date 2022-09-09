export const getPokemons = async (): Promise<Response> => {
	return fetch('https://pokeapi.co/api/v2/pokemon/2')
}
