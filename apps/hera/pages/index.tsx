/* eslint-disable security-node/detect-crlf */
import { Pokemon, PokemonResourceList } from '@core/models'
import { getPokemonResourceList, getPokemons } from '@core/queries'
import { BootCard, Header, Jumbrotron, Title } from '@core/ui'
import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

// @ts-ignore
const Home: NextPage = ({ pokemons, pokemon }: { pokemons: PokemonResourceList; pokemon: Pokemon }) => {
	const [currentPokemon, setCurrentPokemon] = useState(2)

	const handleCurrentPokemon = (value: number): void => {
		setCurrentPokemon(value)
	}

	return (
		<div className={styles.container}>
			<Header title='Pokemon hackathon (NextJS)' />
			<Jumbrotron pokemonData={pokemon} handleCurrentPokemon={handleCurrentPokemon} highlightText='NextJS is used to create this application' />
			<Title title='Pokemon' subtitle='Click here to check pokemon' />
			<BootCard pokemonList={pokemons} handleCurrentPokemon={handleCurrentPokemon} />
		</div>
	)
}
export default Home

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await getPokemons(1)
	const pokemon = await res.json()
	const res1 = await getPokemonResourceList()
	const pokemons = await res1.json()

	// Pass data to the page via props
	return { props: { pokemon, pokemons } }
}
