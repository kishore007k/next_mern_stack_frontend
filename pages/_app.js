import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Head>
				<title>Blog App</title>
				<link rel="shortcut icon" href="/logo.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

export default MyApp;
