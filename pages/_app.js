import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Layout from "../components/Layout";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{/* <> */}
				<Head>
					<title>Blog App</title>
					<link rel="shortcut icon" href="/logo.png" />
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
				{/* </> */}
			</PersistGate>
		</Provider>
	);
};

export default MyApp;
