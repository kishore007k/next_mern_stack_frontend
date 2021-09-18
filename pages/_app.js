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
				<title>Blog Post</title>
				<link rel="shortcut icon" href="/logo.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	return { pageProps };
};

export default MyApp;
