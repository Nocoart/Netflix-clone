import React from "react";
import FilmItem from "./FilmItem";

const Category = ({ name, images }) => {
	return (
		<div className="film-category">
			<h2>{name}</h2>
			<ul className="film-carousel">
				{images.map((image, index) => {
					return <FilmItem key={index} image={image} />;
				})}
			</ul>
		</div>
	);
};

export default Category;
