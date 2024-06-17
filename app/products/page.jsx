"use client";
import "./_products.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import Cart_Context from "../contexts/cart_context";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton_Loading from "./skeleton_loading";
import { BsStarFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Products = () => {
	const [products, setproducts] = useState();
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const [category, setCategory] = useState("");
	const [filter_active, setFilter_active] = useState("");
	const {add_item} = useContext(Cart_Context);
	const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode)


//gereftane kalaha az api
//https://fakestoreapi.com/products
useEffect(() => {
	const data = async() => {
		setLoading(true);
		await axios.get(`https://fakestoreapi.com/products${category}`)
		.then(response => {
			setproducts(response.data);
			setLoading(false);
		})
	}
	data();
}, [category]);
	
// age kala vojood dasht varede cart beshe
const add_product_if_available = (product, count) => {
	if(count > 0) {
		add_item(product)
		alert("Added To Cart")
	}
	else {
		 alert("This Product Is Unavailable")
	}
};

	return (
		<>
			<main className={`container-md my-5 products_page ${dark_mode ? "dark_mode" : undefined}`}>
				{/* filters */}
				<section className="filter_border w-100 p-3 rounded-2">
					<h2 className="text-center w-100 border-bottom border-1 pb-3">Categories</h2>
					<ul className="filter_container w-100 px-0 m-0 d-flex justify-content-evenly align-items-center flex-column flex-sm-row column-gap-3 row-gap-4 mt-3">
						<li onClick={() => {setCategory(""); setFilter_active("all")}} className={filter_active === "all" ? "active" : undefined}>All</li>
						<li onClick={() => {setCategory("/category/men's clothing"); setFilter_active("men's clothing")}} className={filter_active === "men's clothing" ? "active" : undefined}>Men</li>
						<li onClick={() => {setCategory("/category/women's clothing"); setFilter_active("women's clothing")}} className={filter_active === "women's clothing" ? "active" : undefined}>Women</li>
						<li onClick={() => {setCategory("/category/jewelery"); setFilter_active("jewelery")}} className={filter_active === "jewelery" ? "active" : undefined}>Jewels</li>
						<li onClick={() => {setCategory("/category/electronics"); setFilter_active("electronics")}} className={filter_active === "electronics" ? "active" : undefined}>Electronics</li>
					</ul>
				</section>

				<section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-gap-5 mt-4">
					{
						loading ? <Skeleton_Loading /> :

						products.map((product) => {
							return (
								<div className="col" key={product.id}>
									<div className="card h-100 p-3 border-0" id="card">
										<div className="product_image_border border-bottom p-3"  style={{width: "100%", height: "200px"}}>
										<img src={product.image} className="card-img-top object-fit-contain" alt="product_image" style={{width: "100%", height: "100%"}} onClick={() => router.push(`/products/${product.id}`)}/>
										</div>
										<div className="card-body d-flex flex-column gap-1">
											<h6 className="card-title text-justify">{product.title}</h6>									
											<p className="card-title text-secondary">Price: {product.price} $</p>
											<p>Rate: {product.rating.rate} <BsStarFill className="mb-1"/></p>
											{product.rating.count > 0 ? <p className="text-success">Available</p> : <p className="text-danger">Unavailable</p>}
										</div>
										<div className="w-full d-flex justify-content-start">
											<button id="btn_add_card" className="p-2 rounded-2" onClick={() => add_product_if_available(product, product.rating.count)}>Add To Cart</button>
										</div>								
									</div>
								</div>
							)
						})
					}
				</section>
			</main>

			
		</>
	)
}

export default Products;