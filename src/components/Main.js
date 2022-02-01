import React from "react";
import "../styles/main.css";
import data from "../assets/data/movies_rnexgr.json";
import Category from "./Category";

const Main = () => {
	return (
		<main>
			{data.map(({ category, images }, index) => {
				return <Category key={index} name={category} images={images} />;
			})}
		</main>
	);
};

export default Main;
