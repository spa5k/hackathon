/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { AppProps } from 'next/app'
import '../styles/globals.css'

// @ts-ignore
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />
}

export default MyApp
