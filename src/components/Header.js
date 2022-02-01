import React from "react";
import logo from "../assets/pictures/logo.png";
import "../styles/header.css";

const Header = () => {
	return (
		<header>
			<a href="#">
				<img src={logo} alt="logo Netflix" />
			</a>
		</header>
	);
};

export default Header;
