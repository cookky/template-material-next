import React from 'react'
import Head from 'next/head'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from '../components/theme'

import initStore from '../utils/store'

/* debug to log how the store is being used */
export default withRedux(initStore, {
	debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
})(
	class MyApp extends App {
		static async getInitialProps({Component, ctx}) {
			return {
				pageProps: {
					// Call page-level getInitialProps
					...(Component.getInitialProps
						? await Component.getInitialProps(ctx)
						: {})
				}
			}
		}

		componentDidMount() {
			// Remove the server-side injected CSS.
			const jssStyles = document.querySelector('#jss-server-side');
			if (jssStyles) {
				jssStyles.parentNode.removeChild(jssStyles);
			}
		}

		render() {
			const {Component, pageProps, store} = this.props
			return (
				<Container>
					<Head>
						<title>Hacktag Space | หน้าแรก</title>
					</Head>
					<Provider store={store}>
						<ThemeProvider theme={theme}>
							<CssBaseline/>
							<Component {...pageProps} />
						</ThemeProvider>
					</Provider>
				</Container>
			)
		}
	}
);
