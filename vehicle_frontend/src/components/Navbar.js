import React from "react";

const Navbar = ({ brand }) => {
	return (
		<nav class="navbar bg-primary " data-bs-theme="dark">
			<div class="container-fluid">
				<form class="container-fluid justify-content-start">
					<center><strong><a class="navbar-brand" href="#" style={{ cursor:'default'}}>{brand}</a></strong></center>
				</form>
			</div>
		</nav>
	);
}

export default Navbar;