/* eslint-disable @typescript-eslint/no-floating-promises */
import { Pokemon, PokemonResourceList } from '@core/models'
import { getPokemonResourceList, getPokemons } from '@core/queries'
import { BootCard, Footer, Header, Jumbrotron, Title } from '@core/ui'
import { useEffect, useState } from 'react'
import './App.css'

function App(): JSX.Element {
	const [response, setResponse] = useState<Pokemon>()
	const [responseList, setResponseList] = useState<PokemonResourceList>()
	const [currentPokemon, setCurrentPokemon] = useState(2)

	useEffect(() => {
		getPokemons(currentPokemon)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`,
					)
				}
				return response.json()
			})
			.then((actualData) => setResponse(actualData))
			.catch((err) => {
				console.log(err.message)
			})
	}, [currentPokemon])

	useEffect(() => {
		getPokemonResourceList()
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`,
					)
				}
				return response.json()
			})
			.then((actualData) => setResponseList(actualData))
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	if (!response || !responseList) {
		return <p>Loading..</p>
	}

	const handleCurrentPokemon = (value: number): void => {
		setCurrentPokemon(value)
	}

	return (
		<div className='App'>
			<Header title='Pokemon hackathon ( ReactJS )' />
			<Jumbrotron pokemonData={response} handleCurrentPokemon={handleCurrentPokemon} highlightText='ReactJS is used to create this application' />
			<Title title='Pokemon' subtitle='Click here to check pokemon' />
			<BootCard pokemonList={responseList} handleCurrentPokemon={handleCurrentPokemon} />
			<Footer copyright='&copy; 2022. Designed by Hackathon ' />
		</div>
	)
}

export default App
