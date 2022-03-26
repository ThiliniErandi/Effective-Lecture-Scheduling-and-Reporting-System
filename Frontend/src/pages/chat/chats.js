import React, { useEffect, useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Loader from "../../components/Chat/Loader";
import Sidebar from "../../components/Chat/Sidebar";
import Chat from "./Chat";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import ChatHome from "./Home";

const userPrefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

const Chats = () => {
	// const [appLoaded, setAppLoaded] = useState(false);
	// const [startLoadProgress, setStartLoadProgress] = useState(false);

	useEffect(() => {
		if (userPrefersDark) document.body.classList.add("dark-theme");
		// stopLoad();
	}, []);

	// const stopLoad = () => {
	// 	setStartLoadProgress(true);
	// 	setTimeout(() => setAppLoaded(true), 3000);
	// };

	// if (!appLoaded) return <Loader done={startLoadProgress} />;

	return (
		<div className="app">
			<Navbar/>
			{/* <p className="app__mobile-message"> Only available on desktop 😊. </p> */}
			<Router>
				<div className="app-content">
					<Sidebar/>
					<Switch>
						<Route path="/chat/:id" component={Chat} />
						{/* <Route component={ChatHome} /> */}
					</Switch>
				</div>
			</Router>
			<Footer/>
		</div>
	);
}

export default Chats;
