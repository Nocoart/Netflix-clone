import React from "react";

const FilmItem = ({ image }) => {
	return (
		<li>
			<a href="">
				<img className="film-item" src={image} alt="fiml image" />
			</a>
		</li>
	);
};

export default FilmItem;
