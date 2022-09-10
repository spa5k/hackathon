import React, { FC } from 'react'

interface ITitleProps {
	title: string
	subtitle?: string // optional
}

const Title: FC<ITitleProps> = ({ title, subtitle }) => {
	return (
		<>
			<h1 className='text-center'>{title}</h1>
			<h4 className='text-center'>{subtitle}</h4>
		</>
	)
}

export default Title
