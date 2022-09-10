const Highlight = ({ text }: { text: string }): JSX.Element => {
	return (
		<>
			<div className='card text-white bg-secondary my-5 py-4 text-center'>
				<div className='card-body'>
					<p className='text-white m-0'>{text}</p>
				</div>
			</div>
		</>
	)
}

export default Highlight
