"use client";
import "./_sidebar.scss";
import { BsCart2, BsList, BsX } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {

	const pathname = usePathname();
	const [user_token, setUser_token] = useState("");

	useEffect(() => {
		let token = localStorage.getItem("user_token");
		token = JSON.parse(token);
		setUser_token(token);
	}, []);

	return (
		<>
			<button type="button" className="sidebar_btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BsList className="w-100 h-100"/></button>
			
			
			<aside className="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			<button type="button" class="close_btn" data-bs-dismiss="offcanvas" aria-label="Close"><BsX className="w-100 h-100"/></button>
				<nav className="w-100 h-100">
				{
					!user_token ? (
						<ul className="w-100 h-100 m-0 p-0 d-flex flex-column row-gap-5 justify-content-center align-items-center">
							<li><Link href={"/cart"} className={pathname === "/cart" ? "active" : undefined}><BsCart2 style={{width: "24px", height: "24px"}}/></Link></li>
							<li><Link href={"/products"} className={pathname === "/products" ? "active" : undefined}>Products</Link></li>
							<li><Link href={"/about-us"} className={pathname === "/about-us" ? "active" : undefined}>About</Link></li>
							<li><Link href={"/register"} className={pathname === "/register" ? "active" : undefined}>Register</Link></li>
							<li><Link href={"/login"} className={pathname === "/login" ? "active" : undefined}>Login</Link></li>
						</ul>
					) : (
						<ul className="w-100 h-100 m-0 p-0 d-flex flex-column row-gap-5 justify-content-center align-items-center">
							<li><Link href={"/cart"} className={pathname === "/cart" ? "active" : undefined}><BsCart2 style={{width: "24px", height: "24px"}}/></Link></li>
							<li><Link href={"/products"} className={pathname === "/products" ? "active" : undefined}>Products</Link></li>
							<li><Link href={"/about-us"} className={pathname === "/about-us" ? "active" : undefined}>About</Link></li>
							<li><Link href={"/dashboard"} className={pathname === "/dashboard" ? "active" : undefined}>Dashboard</Link></li>
							<li><a onClick={() => {localStorage.clear(); window.location = "/"}}>Logout</a></li>
						</ul>
					)
				}
				</nav>
			</aside>
		</>
	);
};

export default Sidebar;