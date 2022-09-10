import React, { FC } from 'react'

interface ITitleProps {
	title: string
	subtitle?: string // optional
}

const Title: FC<ITitleProps> = ({ title, subtitle }) => {
	return (
		<>
			<h1>{title}</h1>
			<h4>{subtitle}</h4>
		</>
	)
}

export default Title
