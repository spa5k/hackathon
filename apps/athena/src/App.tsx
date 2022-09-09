import type { Pokemon } from '@core/models'
import { Button } from '@core/ui'
import './App.css'

function App(): JSX.Element {
	const x: Pokemon = {
		abilities: [{ ability: { name: 'nice' } }],
	}
	return (
		<div className='App'>
			<h2>Main Athena app</h2>
			<Button />

			<p>nice</p>
		</div>
	)
}

export default App
