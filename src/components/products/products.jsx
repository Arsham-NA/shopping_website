import "./sass/products.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Context_Products from "../../contexts/products";
import { Link } from "react-router-dom";
import Context_Cart from "../../contexts/cart";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton_Loading from "./loading";
import { BsStarFill } from "react-icons/bs";

const Products = () => {
	const {products, setproducts} = useContext(Context_Products);
	const {add_item} = useContext(Context_Cart);
	const [loading, setloading] = useState(true);


// gereftane kalaha az api
useEffect(() => {
	const data = async() => {
		const response = await axios.get("https://fakestoreapi.com/products");
		setproducts(response.data);
		setloading(false);
	}
	data();
}, []);

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
			<main className="container-md my-5">
				<section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-evenly row-gap-5">
					{
						loading ? <Skeleton_Loading /> :

						products.map((product) => {
							return <div className="col" key={product.id}>
							<div className="card h-100 p-3 border-0" id="card">
								<Link to={`/products/${product.id}`}><img src={product.image} className="card-img-top p-5 border-bottom object-fit-contain" alt="product" style={{height: "300px", width: "100%"}} /></Link>
								<div className="card-body d-flex flex-column gap-1">
									<h6 className="card-title text-justify">{product.title}</h6>									
									<p className="card-title text-secondary">Price: {product.price} $</p>
									<p>Rate: {product.rating.rate} <BsStarFill className="mb-1"/></p>
									{product.rating.count > 0 ? <p className="text-success">Available</p> : <p className="text-danger">Unavailable</p>}
								</div>
								<div className="w-full d-flex justify-content-start">
									<button id="btn_add_card" className="btn text-white" onClick={() => add_product_if_available(product, product.rating.count)}>Add To Cart</button>
								</div>								
							</div>
						</div>
						})
					}
				</section>
			</main>

			
		</>
	)
}

export default Products;