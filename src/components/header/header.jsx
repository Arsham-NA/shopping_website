import "./sass/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";


const Header = ({user_token}) => {
	
	const [navbar_active, settnavbar_active] = useState(false);
	return (
		<header>
			<div id="left_section">
				<h2 id="logo"><Link to={"/"}>Arsham <br className="d-sm-none"></br>Store</Link></h2>
			</div>

			<div id="mid_section">
				<div id="btn_magnifier">
				<BsSearch className="w-50 h-50"/>
				</div>
				<input type="search" id="search_bar" placeholder="Search"/>
			</div>
			

			<nav id={navbar_active && "navbar_active"}>
				<ul>
				{
					!user_token ? (
						<>
							<li><Link to={"/cart"}><BsCart2 style={{width: "90%", height: "90%"}}/></Link></li>
							<li><Link to={"/register"}>Register</Link></li>
							<li><Link to={"/login"}>Login</Link></li>
							<li><Link to={"/about"}>About</Link></li>
						</>
					) : (
						<>
							<li><Link to={"/cart"}><BsCart2 style={{width: "90%", height: "90%"}}/></Link></li>
							<li><Link to={"/dashbord"}>Dashbord</Link></li>
							<li><Link onClick={() => {localStorage.removeItem("token"); window.location = "/"}}>Logout</Link></li>
							<li><Link to={"/about"}>About</Link></li>
						</>
					)
				}
				</ul>
				<button id="close_nav" className=" btn-close position-absolute top-0 start-0 m-3" onClick={() => settnavbar_active(false)}></button>
			</nav>

			<div id="right_section">
				<div id="burger_menu_border" onClick={() => {settnavbar_active(true)}}>
					<FaBars className="w-100 h-100" id="burger_menu_icon" />
				</div>
			</div>
		</header>
	)
}

export default Header;