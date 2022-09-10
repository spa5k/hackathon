import { Pokemon, PokemonResourceList } from '@core/models'
import { getPokemons, getPokemonResourceList } from '@core/queries'
import { BootCard, Footer, Header, Jumbrotron, Title } from '@core/ui'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const [response, setResponse] = useState<Pokemon>()
	const [responseList, setResponseList] = useState<PokemonResourceList>()
	const [currentPokemon, setCurrentPokemon] = useState(2);

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

	if (!response) {
		return <p>Loading..</p>
	}

	const handleCurrentPokemon = (value: number) : void => {
		setCurrentPokemon(value)
	}

	return (
		<div className={styles.container}>
			<Header title='Pokemon hackathon (NextJS)' />
			<Jumbrotron pokemonData={response} handleCurrentPokemon={handleCurrentPokemon} highlightText='NextJS is used to create this application' />
			<Title title='Pokemon' subtitle='Click here to check pokemon' />
			<BootCard pokemonList={responseList} handleCurrentPokemon={handleCurrentPokemon} />
			<Footer copyright='&copy; 2022. Designed by Hackathon ' />
		</div>
	)
}

export default Home
