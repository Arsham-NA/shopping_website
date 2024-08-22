"use client";
import "./_header.scss";
import { useState, useEffect} from "react";
import { BsSearch, BsCart2, BsMoonFill, BsBrightnessHighFill  } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { change_theme } from "@/app/redux/dark_mode";
import Sidebar from "../sidebar/sidebar";


const Header = () => {

	const [search_window, setsearch_window] = useState(false);
	const [serach_window_input, setsearch_window_input] = useState();
	const [products, setproducts] = useState([]);
	const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode)
  const dispatch = useDispatch()
	const pathname = usePathname();
	const [user_token, setUser_token] = useState("");

	useEffect(() => {
		let token = localStorage.getItem("user_token");
		token = JSON.parse(token);
		setUser_token(token);
	}, []);

	useEffect(() => {
		//chon emkan dare data ziad bashe data ro yeja nemigirim o ba har search rerender mikonim
		const get_data = async() => {
			let response = await axios.get("https://fakestoreapi.com/products");
			response = response.data.filter((item) => item.title.includes(serach_window_input));
			setproducts(response);
		};
		get_data()
	}, [serach_window_input]);



	return (
		<header className={dark_mode ? "dark_mode" : undefined}>
			<div className="left_section">
				<span id="logo"><Link href={"/"}>Shopping <br className="d-sm-none"></br>Website</Link></span>
				<button className="btn_toggle" onClick={() => dispatch(change_theme())}>
					<div className="toggler">
						{dark_mode ? <BsBrightnessHighFill  style={{width: "12px", height: "12px"}}/> : <BsMoonFill style={{width: "12px", height: "12px"}}/>}
					</div>
				</button>
			</div>
			<div className="mid_section">
				<div className="search_container" onClick={() => setsearch_window(true)}>
					<div className="search_icon_border"><BsSearch className="search_icon w-100 h-100"/></div>
					<div className="search_input">
						<span className="search_place_holder">Search...</span>
					</div>
				</div>
			</div>
			
			<nav className="nav d-none d-md-flex">
				{
					!user_token ? (
						<ul>
							<li><Link href={"/cart"} className={pathname === "/cart" ? "active" : undefined}><BsCart2 style={{width: "24px", height: "24px"}}/></Link></li>
							<li><Link href={"/products"} className={pathname === "/products" ? "active" : undefined}>Products</Link></li>
							<li><Link href={"/about-us"} className={pathname === "/about-us" ? "active" : undefined}>About</Link></li>
							<li><Link href={"/register"} className={pathname === "/register" ? "active" : undefined}>Register</Link></li>
							<li><Link href={"/login"} className={pathname === "/login" ? "active" : undefined}>Login</Link></li>
						</ul>
					) : (
						<ul>
							<li><Link href={"/cart"} className={pathname === "/cart" ? "active" : undefined}><BsCart2 style={{width: "24px", height: "24px"}}/></Link></li>
							<li><Link href={"/products"} className={pathname === "/products" ? "active" : undefined}>Products</Link></li>
							<li><Link href={"/about-us"} className={pathname === "/about-us" ? "active" : undefined}>About</Link></li>
							<li><Link href={"/dashboard"} className={pathname === "/dashboard" ? "active" : undefined}>Dashboard</Link></li>
							<li><a onClick={() => {localStorage.clear(); window.location = "/"}}>Logout</a></li>
						</ul>
					)
				}
			</nav>
			
			<div className="right_section d-block d-md-none d-flex justify-content-end align-items-center" style={{flex: "1"}}>
				<Sidebar />
			</div>
			{/* search window */}
			<section className={`search_window ${search_window ? "search_window_active" : undefined}`}>
				<div className="search_window_container col-10 col-sm-8 col-md-6 rounded-2 p-3 position-relative">
					<div className="top_section_window mt-4 rounded-2 px-3">
						<button id="btn_magnifier_window"><BsSearch className="w-100 h-100" /></button>
						<input type="search" id="search_window_input" placeholder="Search" onChange={(e) => setsearch_window_input(e.target.value)}/>
					</div>
					{/* age product peyda shod */}
					{
						<div className="bot_section_window mt-2 rounded-2 border">
							{
								serach_window_input ===  "" ? (
									undefined
									) : (
									products.map((product) => 
									<div className="product border-bottom p-3" key={product.id}>
										<p>{product.title}</p>
										<div style={{width: "50px", height: "60px", overflow:"hidden"}}>
											<img src={product.image} alt="product_image" className="w-100 h-100" object-fit-contain/>
										</div>
									</div>
								)
							)
								
							}
						</div>
					}
					<button type="button" className="btn-close position-absolute" id="btn_close_search" onClick={() => setsearch_window(false)} ></button>
				</div>
			</section>
		</header>
	)
}

export default Header;