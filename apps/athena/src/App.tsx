import { Button, Title, BootCard, Header, Footer } from '@core/ui'
import type { Pokemon } from '@core/models'
import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

interface ApiResponse {
	abilities: [{ability: {name: string}}];
	sprites: { front_default: string, back_default: string };
	name: string;
}

function App(): JSX.Element {

	const [response, setResponse] = useState<ApiResponse | null>(null);

	useEffect(() => {
	  axios
		.get<ApiResponse>('https://pokeapi.co/api/v2/pokemon/2')
		.then((response) => setResponse(response.data));
	}, []);

	const x: Pokemon = {
		abilities: [{ ability: { name: 'nice' } }],
	}

	return (
		<div className='App'>
			<Header title="Main Athena app" />
			<Title title="Pokemon" subtitle="Players" />
			<BootCard pokemonData={response}  />
			<Footer copyright="&copy; 2022. Designed by Hackathon " />
		</div>
	)
}

export default App
