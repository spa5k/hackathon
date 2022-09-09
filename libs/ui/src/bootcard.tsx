import { Pokemon } from '@core/models'
import { Col, Row } from 'reactstrap'

export function BootCard({ pokemonData }: { pokemonData: Pokemon }): JSX.Element {
	if (!pokemonData) {
		return <p>No data</p>
	}
	return (
		<Row>
			<Col sm='6'>
				{pokemonData && (
					<div className='card mb-3 '>
						<img src={pokemonData.sprites?.front_default} className='card-img-top' alt={`${pokemonData.name} image`} width={150} height={200} />
						<div className='card-body'>
							<h3 className='card-title'>{pokemonData.name}</h3>
							<p className='card-text'>
								This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
							</p>
							<p className='card-text'>
								<small className='text-muted'>Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				)}
			</Col>

			<Col sm='6'>
				{pokemonData && (
					<div className='card mb-3'>
						<img src={pokemonData.sprites?.back_default} className='card-img-top' alt={pokemonData.name + ' image'} width={150} height={200} />
						<div className='card-body'>
							<h3 className='card-title'>{pokemonData.name}</h3>
							<p className='card-text'>
								This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
							</p>
							<p className='card-text'>
								<small className='text-muted'>Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				)}
			</Col>
		</Row>
	)
}
