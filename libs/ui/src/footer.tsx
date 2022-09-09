import React from 'react'
import { Button, Container } from 'reactstrap'

export function Footer({ copyright }): JSX.Element {
	return (
		<Container>
			<div className='fixed-bottom'>
				<hr className='my-4' />
				<p className='lead'>{copyright}</p>
			</div>
		</Container>
	)
}
