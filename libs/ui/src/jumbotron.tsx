/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '@core/models'
import Highlight from './highlight'

export function Jumbrotron(
	{ pokemonData, highlightText, handleCurrentPokemon }: { pokemonData: Pokemon; highlightText: string; handleCurrentPokemon: any },
): JSX.Element {
	return (
		<div className='container px-4 px-lg-5'>
			<div className='row gx-4 gx-lg-5 align-items-center my-5'>
				<div className='col-lg-7'>
					<img
						className='img-fluid rounded mb-4 mb-lg-0'
						src={pokemonData?.sprites?.other!['official-artwork']?.front_default}
						alt={`${pokemonData.name} image`}
					/>
				</div>
				<div className='col-lg-5'>
					<h1 className='font-weight-light'>{pokemonData?.name?.toUpperCase()}</h1>
					<p>
						This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard
						Bootstrap core components. Feel free to use this template for any project you want!
					</p>
					<a
						className='btn btn-primary'
						href='#!'
						onClick={() => {
							handleCurrentPokemon(Math.floor(Math.random() * 10))
						}}
					>
						Random Pokemon
					</a>
				</div>
			</div>

			<Highlight text={highlightText} />
		</div>
	)
}
