/* eslint-disable react/react-in-jsx-scope */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Theme from "theme/Theme";
import AppProvider from "context/AppProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</Theme>
	);
}

export default MyApp;
