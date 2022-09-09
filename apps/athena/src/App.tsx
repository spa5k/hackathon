import { Button, Title, BootCard } from '@core/ui'
import './App.css'

function App(): JSX.Element {
	return (
		<div className='App'>
			<h2>Main Athena app</h2>
			<Title title="Dashboard" subtitle="Admin" />
			<Button />
			<BootCard />
		</div>
	)
}

export default App
