import "../styles/globals.css";
import type { AppProps } from "next/app";
import Theme from "theme/Theme";
import { SessionProvider } from "next-auth/react";
import SocketProvider from "context/SocketProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</Theme>
	);
}

export default MyApp;
