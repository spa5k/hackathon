/* eslint-disable @typescript-eslint/no-floating-promises */
import { Pokemon } from '@core/models'
import { getPokemons } from '@core/queries'
import { BootCard, Footer, Header, Title } from '@core/ui'
import { useEffect, useState } from 'react'
import './App.css'

function App(): JSX.Element {
	const [response, setResponse] = useState<Pokemon>()

	useEffect(() => {
		getPokemons()
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
	}, [])
	if (!response) {
		return <p>Loading..</p>
	}

	return (
		<div className='App'>
			<Header title='Main Athena app' />
			<Title title='Pokemon' subtitle='Players' />
			<BootCard pokemonData={response} />
			<Footer copyright='&copy; 2022. Designed by Hackathon ' />
		</div>
	)
}

export default App
