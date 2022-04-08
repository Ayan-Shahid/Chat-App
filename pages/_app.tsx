import "../styles/globals.css";
import type { AppProps } from "next/app";
import Theme from "theme/Theme";
import { SessionProvider } from "next-auth/react";
import PusherProvider from "context/PusherProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<PusherProvider>
				<SessionProvider session={pageProps.session}>
					<Component {...pageProps} />
				</SessionProvider>
			</PusherProvider>
		</Theme>
	);
}

export default MyApp;
