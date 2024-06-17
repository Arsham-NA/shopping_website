"use client";
import "./_product.scss";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import Cart_Context from "@/app/contexts/cart_context";



const Product = ({params}) => {
	
	const [product, setproduct] = useState([]);
	const [product_count, setproduct_count] = useState(null);
	const [product_rate, setproduct_rate] = useState(null);
	const {add_item} = useContext(Cart_Context)
	
	useEffect(() => {
		// gereftane kala az url va update kardane params
		const get_product = async() => {
			const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
			setproduct(response.data);
			//betore mostaghim too map count va rate ro nemishod nevesht bug miraft, inja joda rikhtameshon dakhele motoghayer
			setproduct_count(response.data.rating.count)
			setproduct_rate(response.data.rating.rate)
		}
		get_product();
	}, []);

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
			{/* Liste Kalaha */}
			<section id="container_product" className="col-8 mx-auto p-0 my-4 overflow-hidden rounded-3">
				<div id="product" className="row row-cols-1 row-cols-md-2 py-3 bg-white">
					<div className="col d-flex justify-content-center align-items-center position-relative" >
						<img src={product.image} alt="product_image" className="object-fit-contain w-100 h-100 p-5" style={{maxHeight: "400px"}}/>
					</div>
					<div className="col d-flex align-items-center justify-content-center border-start">
						<span className="w-100 h-100 p-4 d-flex flex-column justify-content-center align-items-start row-gap-3 row-gap-lg-5">
							<h5>{product.title}</h5>
							<ul className="p-0 m-0 d-flex flex-column justify-content-center align-items-start row-gap-3 row-gap-lg-5">
								<li><span className="text-secondary">Price:</span> {product.price} $</li>
								<li><span className="text-secondary">Category:</span> {product.category}</li>
								<li><span className="text-secondary">Rate: </span>{product_rate} <BsStarFill className="mb-1"/></li>
								{product_count > 0 ? <li className="text-success fw-bold fs-5">Available</li> : <li  className="text-danger">Unavailable</li> }
							</ul>
							<h6 className="text-justify"><span className="text-secondary d-block mb-1">Description: </span>{product.description}</h6>
							<button id="btn_add_card" className="btn text-white w-100" onClick={() => add_product_if_available(product, product.rating.count)}>Add To Cart</button>
						</span>
					</div>
				</div>
			</section>
		</>
	)
}

export default Product