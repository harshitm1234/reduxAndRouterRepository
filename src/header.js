import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

/**
 * Header to display across pages
 * @param {*} props 
 */
function Header(props) {
	return (
		<>
			<header className="main-header">
				<nav className="main-header__nav">
					<ul className="main-header__item-list">
						<li className="main-header__item">
							<Link to="/" className={useLocation().pathname === "/" ? "active" : ""}>
								History
							</Link>
						</li>
						<li className="main-header__item">
							<Link to="/payload" className={useLocation().pathname === "/payload" ? "active" : ""}>
								Payload
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
