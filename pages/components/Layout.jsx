import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="container max-w-screen-xl mx-auto pt-20">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
