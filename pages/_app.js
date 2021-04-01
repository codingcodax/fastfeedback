import Layout from "../components/Layout";
import AuthContextProvider from "../context/AuthContext";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<AuthContextProvider>
				<Component {...pageProps} />
			</AuthContextProvider>
		</Layout>
	);
};

export default MyApp;
