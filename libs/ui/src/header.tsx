import React from 'react'
import { Button, Container } from 'reactstrap'

export function Header({ title }): JSX.Element {
	return (
		<Container>
			<h1 className='display-4'>{title}</h1>
			<hr className='my-4' />
			<p className='lead'>
				This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
			</p>
		</Container>
	)
}
