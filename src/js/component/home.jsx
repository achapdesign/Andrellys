import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Gallery from "./Gallery";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Gallery />

		</>
	);
};

export default Home;
