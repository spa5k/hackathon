export function Footer({ copyright }: { copyright: string }): JSX.Element {
	return (
		<footer className='py-5 bg-dark'>
			<div className='container px-4 px-lg-5'>
				<p className='m-0 text-center text-white'>{copyright}</p>
			</div>
		</footer>
	)
}
